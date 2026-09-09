"use client";

import { useEffect, useState } from "react";

type ContributionDay = {
  contributionCount: number;
  date: string;
  contributionLevel: string;
};

type ContributionWeek = {
  contributionDays: ContributionDay[];
};

type ContributionCalendar = {
  totalContributions: number;
  weeks: ContributionWeek[];
};

const levelClasses: Record<string, string> = {
  NONE: "bg-muted",
  FIRST_QUARTILE: "bg-blue-200 dark:bg-blue-950",
  SECOND_QUARTILE: "bg-blue-300 dark:bg-blue-800",
  THIRD_QUARTILE: "bg-blue-500 dark:bg-blue-600",
  FOURTH_QUARTILE: "bg-blue-700 dark:bg-blue-400",
};

function getMonthLabel(date: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    new Date(`${date}T00:00:00`),
  );
}

export default function GithubContributions() {
  const [calendar, setCalendar] = useState<ContributionCalendar | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadContributions = async () => {
      try {
        const response = await fetch("/api/github/contributions");
        if (!response.ok) throw new Error("Failed to load contributions");

        setCalendar(await response.json());
      } catch {
        setError(true);
      }
    };

    loadContributions();
  }, []);

  if (error) return null;

  const monthLabels = (
    calendar?.weeks.reduce<{ key: string; label: string }[]>((months, week) => {
      const firstDay = week.contributionDays[0];
      if (!firstDay) return months;

      const date = new Date(`${firstDay.date}T00:00:00`);
      const key = `${date.getFullYear()}-${date.getMonth()}`;
      if (!months.some((month) => month.key === key)) {
        months.push({ key, label: getMonthLabel(firstDay.date) });
      }

      return months;
    }, []) ?? []
  ).slice(0, 12);

  return (
    <section id="contributions" aria-labelledby="contributions-heading">
      <div className="flex min-h-0 flex-col gap-y-4">
        <div className="overflow-x-auto rounded-lg border border-border/70 bg-card/50 p-5">
          {!calendar ? (
            <div className="h-31.5 animate-pulse rounded-md bg-muted/50" />
          ) : (
            <div className="min-w-170 sm:min-w-0">
              <div className="min-w-0">
                <div
                  className="mb-2 grid gap-1 text-center text-[9px] font-semibold text-muted-foreground sm:text-[10px]"
                  style={{
                    gridTemplateColumns: `repeat(${monthLabels.length}, minmax(0, 1fr))`,
                  }}
                >
                  {monthLabels.map((month) => (
                    <span key={month.key} className="whitespace-nowrap">
                      {month.label}
                    </span>
                  ))}
                </div>

                <div
                  className="grid grid-flow-col grid-rows-7 gap-1"
                  style={{
                    gridTemplateColumns: `repeat(${calendar.weeks.length}, minmax(0, 1fr))`,
                  }}
                >
                  {calendar.weeks.map((week, weekIndex) =>
                    week.contributionDays.map((day) => (
                      <span
                        key={`${weekIndex}-${day.date}`}
                        title={`${day.contributionCount} contributions on ${day.date}`}
                        className={`aspect-square min-w-0 rounded-[2px] ${levelClasses[day.contributionLevel] ?? "bg-muted"}`}
                      />
                    )),
                  )}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {calendar.totalContributions} contributions in the last year
                </span>
                <span className="hidden items-center gap-1 sm:flex">
                  Less
                  {Object.values(levelClasses).map((className, index) => (
                    <span
                      key={`legend-${index}`}
                      className={`size-3 rounded-[2px] ${className}`}
                    />
                  ))}
                  More
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
