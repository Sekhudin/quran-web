'use client';
import { NextLinkButton } from 'packages/ui/next-link';
import { cn, Props } from 'packages/utils/cn';
import service from 'modules/quran/service/quran.service';
import helper from 'modules/quran/service/helper.service';
import useMediaQuery from 'packages/hooks/use-media-query';
import React from 'react';

const SpecialSurahList = ({ className }: Props) => {
  const isMd = useMediaQuery('(max-width: 768px)');
  const sumSlice = React.useMemo(() => {
    if (isMd) return 4;
  }, [isMd]);

  return (
    <ul
      className={cn(
        `flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 lg:gap-x-6
        2xl:gap-x-8 gap-y-2 mb-8`,
        className
      )}>
      {service.specialSurahList.slice(0, sumSlice).map((surah, key) => (
        <li key={key}>
          <NextLinkButton
            className={cn(`px-2 sm:px-4 py-1 rounded-full duration-500 delay-100`)}
            variant="secondary"
            href={helper.hrefSurah(surah.number)}>
            <span>{surah.name_id}</span>
          </NextLinkButton>
        </li>
      ))}
    </ul>
  );
};

export default SpecialSurahList;
