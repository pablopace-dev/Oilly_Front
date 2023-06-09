import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';
import '../../main.css'


const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Login', href: '/login', current: false },
  { name: 'Registro', href: '/register', current: false },
  { name: 'Escanea tu QR', href: '/login', current: false },
  { name: 'Sobre nosotros', href: '/aboutus', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const NavBar = () => {

  return (

    <Disclosure as="nav" className="bg-[#fafafa] position3">
      {({ open, close }) => (

        <>

          <div className=''>
            <img src="../assets/Logo.png" alt="logo" className='Logo' />
          </div>


          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden  w-full">

                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-950 hover:bg-[#f89a16] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>

                <div className="flex ml-auto ">
                  <span className="mx-2 mr-2">Escanea aquí</span>
                  <NavLink to={'login'}>
                    <img
                      src="\assets\qr.png"
                      alt="scan-logo"
                      className="fill-current text-white h-6 m-auto w-6 hover:text-[#c95c03]"
                    />
                  </NavLink>
                </div>

              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start w-full">

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (

                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-slate-100 text-slate-950 hover:bg-[#f89a16]' : 'text-slate-950 hover:bg-[#f89a16] hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>

                    ))}

                    <div className="flex ml-auto px-3 py-2 right-1 absolute ">
                      <span className="mx-2 text-sm font-medium">Escanea aquí</span>
                      <NavLink to={'login'}>
                        <img
                          src="\assets\qr.png"
                          alt="scan-logo"
                          className="fill-current text-white h-6 m-auto w-6 hover:text-white hover:shadow"
                        />
                      </NavLink>

                    </div>
                  </div>

                </div>
              </div>


            </div>
          </div>



          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 absolute z-[1200] bg-[#fafafa] w-full">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={close}
                  className={classNames(
                    item.current ? 'bg-gray-600 text-slate-950' : 'text-slate-950 hover:bg-[#f89a16] hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
