import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [

    { name: 'Home', href: '/home', current: true },
    { name: 'Perfil', href: '#', current: false },
    { name: 'Mis Puntos', href: '#', current: false },
    { name: 'Sobre Nosotros', href: '#', current: false },
    { name: 'Cerrar sesión', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export const NavBarUser = () => {

    return (
      
      <Disclosure as="nav" className="bg-slate-200">
        {({ open }) => (

          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between w-full">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-950 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>

                <div className="flex ml-auto">
                  <span className="mx-2 mr-2">Escanea aquí</span>
                  <a href="login">
                    <img
                      src="\public\assets\qr.png"
                      alt="scan-logo"
                      className="fill-current text-white h-6 m-auto w-6 hover:text-white hover:bg-gray-600"
                    />
                </a>

              </div>
                  
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start w-full">
                  
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-slate-100 text-slate-950 hover:bg-gray-600' : 'text-slate-950 hover:bg-gray-600 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                </div>
              </div>
            </div>
  
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-600 text-slate-950' : 'text-slate-950 hover:bg-gray-600 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    )
  }