import readingTime from "reading-time"

// Drop JSX component blocks (<Demo ... />, <Callout>...</Callout>) so embedded markup isn't counted as prose
export const getReadTime = (content: string) =>
  readingTime(content.replace(/^<([A-Z]\w*)[\s\S]*?(?:\/>|<\/\1>)\s*$/gm, "")).text
