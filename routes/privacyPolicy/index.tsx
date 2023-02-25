import { LinkTo } from '../../components/atom/LinkTo.tsx';
import { BasicTemplate } from '../../components/Template/shared/BasicTemplate.tsx';

export default function PrivacyPage() {
  return (
    <BasicTemplate path={'privacyPolicy'} title={'プライバシーポリシー'}>
      <span class="block pb-4">
        当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。
      </span>
      <span class="block pb-4">
        このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
      </span>
      <span class="block pb-4">
        この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
      </span>
      <span class="block pb-4">
        この規約に関しての詳細は
        <a
          href="https://marketingplatform.google.com/about/analytics/terms/jp/"
          class="border-b-1 hover:text-blue-500 px-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Googleアナリティクスサービス利用規約のページ
        </a>
        や
        <a
          href="https://policies.google.com/technologies/ads?hl=ja"
          class="border-b-1 hover:text-blue-500 px-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Googleポリシーと規約ページ
        </a>
        をご覧ください。
      </span>
      <div class="text-white my-10 text-center">
        <LinkTo href="/">トップへ</LinkTo>
      </div>
    </BasicTemplate>
  );
}
