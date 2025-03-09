import { ChevronRight } from 'lucide-react';
import { cn } from './lib/utils';
import Carousel from './components/c';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './components/ui/navigation-menu';
import { menuItems, opts, slides } from './lib/constant';
import { MobileMenu } from './components/mobile-menu';
import { useIsMobile } from './hooks/use-mobile';


function App() {
  const act = () => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger className='rounded-none'>
          <p className='text-center'>
            Activities
          </p>
        </NavigationMenuTrigger>
        <NavigationMenuContent className='bg-white flex flex-col w-full text-nowrap'>
          <NavigationMenuLink>National Women's Month Celebration</NavigationMenuLink>
          <NavigationMenuLink>Community Education Program</NavigationMenuLink>
          <NavigationMenuLink>Awareness Campaign in Hongkong</NavigationMenuLink>
          <NavigationMenuLink>wareness Campaign againts Cybercrime and Online Child Exploitation</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>

  const legal = () => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger className='rounded-none'>Legal Issuances</NavigationMenuTrigger>
        <NavigationMenuContent className='bg-white flex flex-col text-nowrap'>
          <NavigationMenuLink>CFO Policy Issuances</NavigationMenuLink>
          <NavigationMenuLink>National Gov't Policy Issuances </NavigationMenuLink>
          <NavigationMenuLink>International Convention/Agreements</NavigationMenuLink>

        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>

  const mobile = useIsMobile()

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br bg-blue-600/20 p-8 overflow-x-hidden">

      <nav className="bg-white flex flex-row w-full justify-center absolute top-0 left-0 ">
        <div className="flex w-full mx-8 justify-between space-x-8 text-gray-600 bg-white">
          <div className={cn('flex flex-row gap-x-2 items-center max-lg:w-[20%]', mobile ? 'py-4' : "py-2")}>
            <img src='/CFO.png' alt="logo" className={cn("h-18 w-18", mobile && "h-12 w-12")} />
            <img src="/bagongpilipinas.png" alt="logo" className={cn("h-18 w-18", mobile && "h-12 w-12")} />
          </div>

          <div className="max-lg:hidden flex w-[80%] h-full items-start text-sm justify-between">
            {opts.map((item) => (
              <div className={cn('flex items-center justify-center h-full border-r border-gray-300', item === "Technological Initiatives" && "border-none")}>
                {item === "Activities" ? act() : item == "Legal Issuances" ? legal() :
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className={cn('text-center items-center rounded-none', item === "Technological Initiatives" && "border-none")}>
                          <p className={cn('text-center', item === "Home" && "border-b-2 border-black pb-4 translate-y-2"
                          )}>
                            {item}
                          </p>
                        </NavigationMenuTrigger>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>}
              </div>
            ))}
          </div>

          <div className="hidden max-lg:flex ml-auto items-center">
            <MobileMenu />
          </div>
        </div>
      </nav>

      <div className="flex gap-8 mt-32 flex-row justify-between max-lg:flex-col">
        <div className="w-[40%] max-lg:w-full">
          <div className="border-l-white border-l-2 backdrop-blur-md p-6">
            <h1 className="text-4xl font-bold text-white mb-8">
              GENDER AND DEVELOPMENT CORNER
            </h1>
            <div className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item}
                  className="w-full text-left text-white border-none bg-blue-900 border-1 p-4 rounded-lg flex justify-between items-center"
                >
                  <span>{item}</span>
                  <ChevronRight className="h-5 w-5 ring-1 rounded-full" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[50%] max-lg:w-full max-md:mt-24 max-lg:mb-12">
          <div className="flex items-center justify-center rounded-lg p-6 relative">
            <Carousel slides={slides} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;