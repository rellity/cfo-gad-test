import { ChevronRight } from 'lucide-react';
import { cn } from './lib/utils';
import Carousel from './components/c';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './components/ui/navigation-menu';


function App() {


  const slides = [
    {
      title: "Meet the Committee",
      description: "Learn about the dedicated team behind our gender mainstreaming efforts and initiatives.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "2024 NWMC",
      description: "National Women's Month Celebration 2024: Empowering Filipinas Beyond Borders",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Awards and Policies",
      description: "Discover our latest achievements and policy implementations.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    }
  ];

  const menuItems = [
    "BACKGROUND",
    "CFO'S GENDER MAINSTREAMING EFFORTS",
    "GAD IN CFO",
    "CFO-GFPS",
    "GAD-ORIENTED CFO PROGRAMS"
  ];

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


  return (
    <div className="min-h-screen bg-gradient-to-br bg-blue-600/20 p-8">

      <nav className="bg-white flex flex-row w-full justify-center absolute top-0 left-0 ">
        <div className="flex items-center space-x-8 text-gray-600 bg-white">
          <div className='flex flex-row gap-x-2 items-center'>
            <img src='/CFO.png' alt="logo" className="h-24 w-24" />
            <img src="/bagongpilipinas.png" alt="logo" className="h-20 w-24" />
          </div>

          <div className="flex h-full items-start text-sm justify-between">
            {["Home", "Activities", "Policy Work", "Legal Issuances", "Anti-Human Trafficking Efforts", "IEC Materials", "Sex-Disaggregated Data", "Technological Initiatives"].map((item) => (
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
        </div>
      </nav>

      <div className="grid grid-cols-12 gap-8 mt-32">
        <div className="col-span-4">
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

        <div className="md:col-span-8">
          <div className=" rounded-lg p-6 relative">
            <Carousel slides={slides} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;