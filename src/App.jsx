
function App() {
  return (
      <div className="font-serif">
        <div className="bg-gray-800 h-[400px] flex flex-col items-center justify-center gap-8 p-8 text-center text-white">
          <h1 className="text-5xl">Timi Ombe</h1>
          <h2 className="leading-10 text-3xl">Petroleum Engineer, Software Engineer & Problem solver</h2>
        </div>
        <div className="flex flex-col gap-8 text-lg p-4 [&>a]:[&>p]:text-blue-800">
          <h1 className="text-3xl text-center">Hello! 👋 Nice to meet you!</h1>
          <p>
            My name is Timi Ombe and I am an Engineer from Nigeria. I studied Petroleum & Gas Engineering 
            at Federal University Otuoke, Bayelsa State, Nigeria. I'm also a self taught Software Engineer.
          </p>
          <p>
            I started self learning programming in the year 2020 because I had a lot of free time on my hands due to the lockdown.
            Some resources I studied were The <a href="">OSSU Computer Science</a> program - which I did a few courses here and there
            but ultimately it sparked my interest for programming. 
          </p>
          <p>
            I also self taught web development through the <a href="">App Academy Open's</a> free resource.
          </p>
        </div>
        <div className="flex flex-col p-4">
            <h1 className="text-3xl text-center pb-4">Projects</h1>
            <p>{'Check back later... :)'}</p>
        </div>
        <div className="bg-gray-800 p-4">
            <p className="text-white text-center">© Timi Ombe, 2024</p>
            <div className='p-6 [&>img]:cursor-pointer [&>img]:w-[28px] [&>img]:h-[28px] flex gap-2 justify-center'>
            <img src="https://img.icons8.com/?size=100&id=59813&format=png&color=FFFFFF" alt="" />
            <img src="https://img.icons8.com/?size=100&id=98960&format=png&color=FFFFFF" alt="" />
            <img src="https://img.icons8.com/?size=100&id=62852&format=png&color=FFFFFF" alt="" />
            <img src="https://img.icons8.com/?size=100&id=01GWmP9aUoPj&format=png&color=FFFFFF" alt="" />
            </div>
        </div>
      </div>
  )
}

export default App
