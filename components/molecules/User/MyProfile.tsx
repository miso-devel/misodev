import skills from '../../../static/json/skills.json' assert { type: 'json' };
export const MyProfile = () => {
  return (
    <div class="p-5 rounded-md">
      <div class="flex justify-start items-center gap-2 border-b-2 py-2">
        <img src="/images/dot.png" alt="logo" class="w-12 h-12 rounded-full" />
        <h1 class="text(3xl) font-bold">miso</h1>
        <div class="flex gap-2 items-center ml-auto">
          <a
            href="https://twitter.com/donennnn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/Twitter.png" alt="logo" class="w-6 h-6" />
          </a>
          <a
            href="https://github.com/nisi0929"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/Github.png" alt="logo" class="w-6 h-6" />
          </a>
        </div>
      </div>
      <div class="my-5 ml-2">
        <p>現在大学3年生。主にフロントエンド。</p>
        <p>ラーメン,Apexが好き</p>
      </div>
      <div class="flex flex-grow  overflow-x-scroll">
        {skills.map((skill) => {
          return (
            <p
              style={{ backgroundColor: skill.color }}
              class="mx-1 my-2 p-2 rounded-md text-center w-full whitespace-nowrap"
            >
              {skill.skill}
            </p>
          );
        })}
      </div>
    </div>
  );
};
