import { Switch } from '@headlessui/react'

function SwitchBtn(props) { 
    console.log(props);
  return (
    <div className="py-8 flex items-center justify-center">
    <span className='font-bold me-4'>Light</span>
      <Switch
        checked={props.darkMode}
        onClick={props.toggleDarkBtn}
        className={`${props.darkMode ? 'bg-green-700' : 'bg-green-400'}
          relative inline-flex h-[28px] w-[56px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${props.darkMode ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <span className='font-bold ms-4'>Dark</span>
    </div>
  )
}

export default SwitchBtn