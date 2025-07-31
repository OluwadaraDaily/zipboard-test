import './App.css'
import Accordion from './components/accordion'

function App() {

  return (
    <div>
      <h1 className="text-[57px] font-medium tracking-[-0.25px] leading-[64px] text-app-purple dark:text-app-blue font-roboto mb-12">
        Frequently asked questions
      </h1>
      <div className="flex flex-col gap-2">
        <Accordion title="Q1. Lorem ipsum dolor sit amet consectetur?">
          <p>
            Lorem ipsum dolor sit amet consectetur. Sit mauris ante sed ullamcorper adipiscing. Cras tortor nunc sed risus sit dictum gravida nunc facilisis. Vulputate sit risus ornare integer ut faucibus posuere. Fringilla eros pulvinar lectus arcu adipiscing nunc. At posuere faucibus urna mattis ipsum velit augue penatibus elementum. Interdum sagittis mi lorem vitae dolor. In diam pulvinar leo elit massa varius aliquam eget. Ut proin urna in sit sodales. Fermentum viverra nisl pellentesque tortor fermentum proin justo purus mollis. Lorem ultrices integer nulla nulla enim amet scelerisque porta eu. Orci dictumst integer auctor turpis venenatis.
          </p>
        </Accordion>
        <Accordion title="Q2. Lorem ipsum dolor sit amet consectetur?">
          <p>
            Lorem ipsum dolor sit amet consectetur. Sit mauris ante sed ullamcorper adipiscing. Cras tortor nunc sed risus sit dictum gravida nunc facilisis. Vulputate sit risus ornare integer ut faucibus posuere. Fringilla eros pulvinar lectus arcu adipiscing nunc. At posuere faucibus urna mattis ipsum velit augue penatibus elementum. Interdum sagittis mi lorem vitae dolor. In diam pulvinar leo elit massa varius aliquam eget. Ut proin urna in sit sodales. Fermentum viverra nisl pellentesque tortor fermentum proin justo purus mollis. Lorem ultrices integer nulla nulla enim amet scelerisque porta eu. Orci dictumst integer auctor turpis venenatis.
          </p>
        </Accordion>        
      </div>
    </div>
  )
}

export default App
