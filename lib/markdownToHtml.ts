import mh2 from 'zenn-markdown-html';

export default async function markdownToHtml(markdown: string) {
  return mh2(markdown)
}
