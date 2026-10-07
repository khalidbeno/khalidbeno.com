const paths = {
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  external: 'M14 4h6v6M20 4l-9 9M20 14v6H4V4h6',
  download: 'M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4',
  code: 'm8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18',
  cloud: 'M6 18a4 4 0 0 1-1-8 7 7 0 0 1 13-2 5 5 0 0 1 0 10H6Z',
  shield: 'M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6l-9-4Zm-4 10 3 3 5-6',
  network:
    'M12 7v4m0 0-6 5m6-5 6 5M15 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm14 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  spark: 'M5 19V9m7 10V3m7 16v-7',
  box: 'm12 2 9 5v10l-9 5-9-5V7l9-5Zm-9 5 9 5 9-5m-9 5v10',
  document: 'M14 2H5v20h14V7l-5-5Zm0 0v5h5M8 12h8M8 16h6',
  search: 'M21 21l-6-6M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z',
  mail: 'M3 5h18v14H3V5Zm0 0 9 8 9-8',
  phone:
    'M6 3h4l1 5-3 2c2 3 3 4 6 6l2-3 5 1v4c0 2-2 3-4 4-3C10 20 4 14 3 7c0-2 1-4 3-4Z',
  link: 'M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-2 2M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l2-2',
  book: 'M12 4v17M12 4C8 2 5 2 2 3v16c4-1 7-1 10 2 3-3 6-3 10-2V3c-3-1-6-1-10 1Z',
  check: 'm5 12 4 4L19 6',
} as const;
export type IconName = keyof typeof paths;
export function Icon({
  name,
  className = '',
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
