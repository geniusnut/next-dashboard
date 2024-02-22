import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <RocketLaunchIcon className="h-12 w-12 rotate-[45deg]" />
      <p className="text-[44px] ml-8">Rpa</p>
    </div>
  );
}
