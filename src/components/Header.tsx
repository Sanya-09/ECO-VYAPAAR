/* import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShoppingCart, User, Leaf } from 'lucide-react';
import Logo  from '@/assets/eco-vyapaar-logo.png'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Categories', href: '#categories' },
    { name: 'Cart', href: '#cart', icon: ShoppingCart },
    { name: 'Account', href: '#account', icon: User },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo 
          <div className="flex items-center space-x-4">
            <a href="/">
            <img src="Logo" alt="eco-vyapaar-logo" className="h-8 w-auto mr-4" />
            </a>
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-eco">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-eco bg-clip-text text-transparent">
              Eco-Vyapaar
            </span>
          </div>

          {/* Desktop Navigation 
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 text-foreground hover:text-eco-primary transition-colors duration-300"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA Button 
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="eco-outline" size="sm">
              Sign In
            </Button>
            <Button variant="eco" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu *
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-eco-light transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {Icon && <Icon className="w-5 h-5 text-eco-primary" />}
                      <span className="text-lg">{item.name}</span>
                    </a>
                  );
                })}
                <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                  <Button variant="eco-outline" className="w-full">
                    Sign In
                  </Button>
                  <Button variant="eco" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header; */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Menu, ShoppingCart, User, Leaf } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import Logo from '@/assets/eco-vyapaar-logo.png'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
   const { getItemCount } = useCart();
  const cartCount = getItemCount();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Categories', href: '/products' },
    { name: 'Cart', href: '/cart', icon: ShoppingCart },
    { name: 'Account', href: '#account', icon: User },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand Name Group */}
  
          <div className="flex items-center ">
            {/* Logo */}
            <a href="/" className="mr-4"> {/* Added mr-4 for spacing between logo and text */}
                <img src={Logo} alt="Eco-Vyapaar Logo" className="h-16 w-auto" />
            </a>
            {/* Eco-Vyapaar Text with Leaf Icon */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-eco">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-eco bg-clip-text text-transparent">
                Eco-Vyapaar
              </span>
            </div>
          </div>  

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 text-foreground hover:text-eco-primary transition-colors duration-300 relative"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{item.name}</span>
                   {item.name === 'Cart' && cartCount > 0 && (
                    <Badge variant="default" className="ml-1 px-1.5 py-0.5 text-xs bg-eco-primary text-primary-foreground">
                      {cartCount}
                    </Badge>
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="eco-outline" size="sm">
              Sign In
            </Button>
            <Button variant="eco" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-eco-light transition-colors duration-300 relative"
                      onClick={() => setIsOpen(false)}
                    >
                      {Icon && <Icon className="w-5 h-5 text-eco-primary" />}
                      <span className="text-lg">{item.name}</span>
                      {item.name === 'Cart' && cartCount > 0 && (
                        <Badge variant="default" className="ml-auto px-2 py-1 bg-eco-primary text-primary-foreground">
                          {cartCount}
                        </Badge>
                      )}
                    </a>
                  );
                })}
                <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                  <Button variant="eco-outline" className="w-full">
                    Sign In
                  </Button>
                  <Button variant="eco" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;