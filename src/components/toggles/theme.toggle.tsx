'use client';
import { useTheme } from 'next-themes';
import { SunIcon, MoonStarIcon } from 'lucide-react';
import { DynamicIconMD } from 'components/HOCs/icon.hoc';
import { Button } from 'packages/ui/button';
import { cn, Props } from 'packages/utils/cn';

const LightIcon = DynamicIconMD(SunIcon);
const DarkIcon = DynamicIconMD(MoonStarIcon, 'hoverPrimary');
const ThemeToggle = ({ className, ...props }: Props<React.ComponentProps<typeof Button>>) => {
  const { setTheme, theme } = useTheme();

  const onClickHandler = () => {
    if (!theme) return;
    if (theme === 'dark') {
      setTheme('light');
      return;
    }
    setTheme('dark');
    return;
  };

  return (
    <Button
      className={cn(`rounded-full p-0 sm:p-1.5 group`, className)}
      variant="plain"
      size="none"
      aria-label="toggle dark-theme"
      onClick={onClickHandler}
      {...props}>
      <LightIcon className="dark:hidden" />
      <DarkIcon className="hidden dark:block dark:stroke-primary dark:group-hover:fill-primary/20" />
    </Button>
  );
};

export default ThemeToggle;
