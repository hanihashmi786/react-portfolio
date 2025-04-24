/** @type {import('tailwindcss').Config} */
const shadcnConfig = {
    darkMode: ["class"],
    content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
    theme: {
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
  
  module.exports = {
    darkMode: shadcnConfig.darkMode,
    content: ["./src/**/*.{js,jsx,ts,tsx}", "*.{js,ts,jsx,tsx,mdx}", ...shadcnConfig.content],
    theme: {
      extend: {
        ...shadcnConfig.theme.extend,
        colors: {
          ...shadcnConfig.theme.extend.colors,
          teal: {
            50: "#f0fdfa",
            100: "#ccfbf1",
            200: "#99f6e4",
            300: "#5eead4",
            400: "#2dd4bf",
            500: "#14b8a6",
            600: "#0d9488",
            700: "#0f766e",
            800: "#115e59",
            900: "#134e4a",
            950: "#042f2e",
          },
        },
        typography: (theme) => ({
          DEFAULT: {
            css: {
              color: theme("colors.gray.700"),
              a: {
                color: theme("colors.teal.600"),
                "&:hover": {
                  color: theme("colors.teal.700"),
                },
              },
              "h1, h2, h3, h4": {
                color: theme("colors.gray.900"),
                fontWeight: theme("fontWeight.bold"),
              },
              code: {
                color: theme("colors.gray.800"),
                backgroundColor: theme("colors.gray.100"),
                padding: "0.25rem",
                borderRadius: "0.25rem",
              },
              "code::before": {
                content: '""',
              },
              "code::after": {
                content: '""',
              },
            },
          },
          dark: {
            css: {
              color: theme("colors.gray.300"),
              a: {
                color: theme("colors.teal.400"),
                "&:hover": {
                  color: theme("colors.teal.300"),
                },
              },
              "h1, h2, h3, h4": {
                color: theme("colors.white"),
              },
              code: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
                padding: "0.25rem",
                borderRadius: "0.25rem",
              },
              "code::before": {
                content: '""',
              },
              "code::after": {
                content: '""',
              },
            },
          },
        }),
      },
    },
    plugins: [require("@tailwindcss/typography"), ...shadcnConfig.plugins],
  }
  