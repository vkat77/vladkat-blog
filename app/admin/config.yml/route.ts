import { NextRequest, NextResponse } from 'next/server';

const COLLECTIONS = `
media_folder: public/uploads
public_folder: /uploads

collections:
  - name: posts
    label: Posts
    folder: content/posts
    create: true
    delete: true
    slug: "{{slug}}"
    fields:
      - { label: Title, name: title, widget: string }
      - { label: Date, name: date, widget: datetime, format: "YYYY-MM-DD", date_format: "YYYY-MM-DD", time_format: false }
      - label: Category
        name: category
        widget: select
        options:
          - { label: Technology, value: technology }
          - { label: Analytics, value: analytics }
          - { label: Food, value: food }
          - { label: Sustainability, value: sustainability }
          - { label: Travel, value: travel }
          - { label: Other, value: other }
      - { label: Excerpt, name: excerpt, widget: text }
      - { label: Body, name: body, widget: markdown }
`;

export async function GET(request: NextRequest) {
  const host = request.headers.get('host');
  const protocol = host?.startsWith('localhost') ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;

  const config = `backend:
  name: github
  repo: vkat77/vladkat-blog
  branch: main
  base_url: ${baseUrl}
  auth_endpoint: api/auth
${COLLECTIONS}`;

  return new NextResponse(config, {
    headers: { 'Content-Type': 'text/yaml; charset=utf-8' },
  });
}
