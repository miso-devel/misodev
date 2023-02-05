import { Handlers, PageProps } from 'https://deno.land/x/fresh@1.1.2/server.ts';
import { BasicTemplate } from '../components/Template/shared/BasicTemplate.tsx';
import { UserTemplate } from '../components/Template/UserTemplate.tsx';
type TPageProps = {
  request: Request;
};
export const handler: Handlers<TPageProps> = {
  GET(request, ctx) {
    const data = { request };
    return ctx.render(data);
  },
};
export default function Home({ data }: PageProps<TPageProps>) {
  return (
    <BasicTemplate path={data.request.url.split('/').reverse()[0]} title={''}>
      <UserTemplate />
    </BasicTemplate>
  );
}
