import skills from '../../../static/json/skills.json' assert { type: 'json' };
export const UserSkills = () => {
  return (
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
  );
};
