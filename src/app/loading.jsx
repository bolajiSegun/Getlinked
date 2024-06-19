import { clash_display } from '@/utils/fonts';

const loading = () => {
  return (
    <main>
      <div className="my-container flex items-center justify-center w-screen min-h-screen">
        <div className="animate-bounce">
          <h1
            className={`${clash_display.className} text-[20px] font-bold md:text-[30px] mb-3 md:mb-4 animate-pulse`}
          >
            get<span className="text-light">linked</span>
          </h1>
          <p className="text-lg animate-pulse"> Loading... </p>
        </div>
      </div>
    </main>
  );
};
export default loading;
