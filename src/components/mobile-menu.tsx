import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { opts } from "@/lib/constant";

export const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu size="80px" className="h-20 w-20" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
                <div className="flex flex-col gap-4 mt-8">
                    <NavigationMenu orientation="vertical" className="w-full">
                        <NavigationMenuList className="flex-col space-y-2">
                            {opts.map((item) => (
                                <NavigationMenuItem key={item} className="w-full">
                                    {item === "Activities" ? (
                                        <div className="w-full">
                                            <NavigationMenuTrigger className="w-full justify-between">
                                                Activities
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <div className="flex flex-col p-2 space-y-2">
                                                    <NavigationMenuLink>National Women's Month Celebration</NavigationMenuLink>
                                                    <NavigationMenuLink>Community Education Program</NavigationMenuLink>
                                                    <NavigationMenuLink>Awareness Campaign in Hongkong</NavigationMenuLink>
                                                    <NavigationMenuLink>Awareness Campaign againts Cybercrime</NavigationMenuLink>
                                                </div>
                                            </NavigationMenuContent>
                                        </div>
                                    ) : item === "Legal Issuances" ? (
                                        <div className="w-full">
                                            <NavigationMenuTrigger className="w-full justify-between">
                                                Legal Issuances
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <div className="flex flex-col p-2 space-y-2">
                                                    <NavigationMenuLink>CFO Policy Issuances</NavigationMenuLink>
                                                    <NavigationMenuLink>National Gov't Policy Issuances</NavigationMenuLink>
                                                    <NavigationMenuLink>International Convention/Agreements</NavigationMenuLink>
                                                </div>
                                            </NavigationMenuContent>
                                        </div>
                                    ) : (
                                        <NavigationMenuTrigger className="w-full justify-between">
                                            {item}
                                        </NavigationMenuTrigger>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </SheetContent>
        </Sheet>
    )
}