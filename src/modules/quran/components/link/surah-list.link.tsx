import { NextLinkButton } from 'packages/ui/next-link';
import { cn, Props } from 'packages/utils/cn';
import { amiri } from 'packages/font/arabic.font';
import service from 'modules/quran/service/quran.service';
import helper from 'modules/quran/service/helper.service';

const SurahListLink = ({ className }: Props) => {
  return (
    <ul className={cn(`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`, className)}>
      {service.surahList.map(({ name_trans_id, number_of_verse, ...surah }, key) => (
        <li key={key}>
          <NextLinkButton
            className={cn(`bg_card size-full border border-transparent dark:sm:border-border
            hover:border-primary dark:hover:border-primary hover:text-zinc-800 dark:hover:text-zinc-200
            text-wrap text-base py-4 rounded-xl duration-500 delay-100 group`)}
            variant={'ghost'}
            size={'auto'}
            href={helper.hrefSurah(surah.number)}>
            <span className={`grow flex items-center gap-x-4`}>
              {surah.number}
              <span className="grow flex flex-col">
                {surah.name_id}
                <span className="grow text-xs font-light">
                  {`${name_trans_id} . ${number_of_verse}`}
                </span>
              </span>
            </span>

            <span className={cn(amiri.className, `grow-0 text-2xl`)}>{surah.name}</span>
          </NextLinkButton>
        </li>
      ))}
    </ul>
  );
};

export default SurahListLink;
