/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: () => ({
        original: {
          css: {
            '--tw-prose-body': 'var(--foreground)',
            '--tw-prose-headings': 'var(--foreground)',
            '--tw-prose-lead': 'var(--foreground)',
            '--tw-prose-links': 'var(--foreground)',
            '--tw-prose-bold': 'var(--foreground)',
            '--tw-prose-counters': 'var(--foreground-subtle)',
            '--tw-prose-bullets': 'var(--foreground-subtle)',
            '--tw-prose-hr': 'var(--foreground-subtle)',
            '--tw-prose-quotes': 'var(--foreground-subtle)',
            '--tw-prose-quote-borders': 'var(--foreground-subtle)',
            '--tw-prose-captions': 'var(--foreground)',
            '--tw-prose-code': 'var(--foreground)',
            '--tw-prose-pre-code': 'var(--foreground)',
            '--tw-prose-pre-bg': 'var(--background-darker)',
            '--tw-prose-th-borders': 'var(--foreground-subtle)',
            '--tw-prose-td-borders': 'var(--foreground-subtle)',
          },
        },
      }),
    },
  },
}
