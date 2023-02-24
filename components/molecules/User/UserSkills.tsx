import skills from '../../../static/json/skills.json' assert { type: 'json' };
import { TypoWrapper } from '../../atom/TypoWrapper.tsx';
export const UserSkills = () => {
  return (
    <div class="py-10">
      <TypoWrapper
        element="h2"
        className="mb-5 border-b-2 pb-1"
        word="スキル"
      />
      <div class="grid grid-cols-4 gap-3">
        {skills.map((skill) => {
          return (
            <p
              style={{ backgroundColor: skill.color }}
              class="p-1 rounded-md text-center w-full whitespace-nowrap overflow-x-scroll text-sm"
            >
              {skill.skill}
            </p>
          );
        })}
      </div>
    </div>
  );
};
