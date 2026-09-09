import { NextResponse } from "next/server";

const query = `
  query ($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions

          weeks {
            contributionDays {
              contributionCount
              date
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",

      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query,
        variables: {
          username: process.env.GITHUB_USERNAME,
        },
      }),

      next: {
        revalidate: 3600,
      },
    });

    const result = await response.json();

    // لو GitHub رجع Error
    if (result.errors) {
      console.error(result.errors);

      return NextResponse.json(
        {
          error: "GitHub GraphQL Error",
          details: result.errors,
        },
        {
          status: 500,
        },
      );
    }

    // لو اليوزر مش موجود
    if (!result.data?.user) {
      return NextResponse.json(
        {
          error: "GitHub user not found",
        },
        {
          status: 404,
        },
      );
    }

    const calendar =
      result.data.user.contributionsCollection.contributionCalendar;

    return NextResponse.json(calendar);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to fetch GitHub contributions",
      },
      {
        status: 500,
      },
    );
  }
}
