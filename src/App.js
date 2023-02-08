import { useState, useEffect } from "react";
import createModule from "./swmmwasm.js";
/*eslint-disable*/
//@ts-ignore

function App() {
  // Identify the .inp file. You should place your own .inp file in the 
  // swmmwasm/public/ directory and rename this variable to your file name.
  const [inpFile, setInpFile] = useState('Example1.inp')
  // State variable for the contents of the output .rpt file.
  const [swmmRpt, setSwmmRpt] = useState()

  async function wrapSwmmRun(Module){
    try
    {
      fetch(inpFile)
        .then((r) => r.text())
        .then(text => { 
          // Save the file contents into wasm's file system.
          Module.FS_createDataFile('/', inpFile, text, true, true);
      
          // Create an asynchronous function to call swmm_run on the .inp file.
          async function processModel(){
            const swmm_run = Module.cwrap('swmm_run', 'number', ['string', 'string', 'string'])
            swmm_run(inpFile, "data/rpt.rpt", "data/out.out")
            return 1
          }
      
          // Call the previous asynchronous function and wait for the results.
          processModel().then(() => {
            // Process the .rpt file, which is saved as a uint-8 array.
            var str = Array.from(Module.FS.findObject('data/rpt.rpt').contents)
                      .map((v) => String.fromCharCode(v)).join('') 
            // Update the state variable for the .rpt file contents.
            setSwmmRpt(str)

            return swmmRpt
          })
      })
    } catch (e) {
      setSwmmRpt('Model Processing Failed: \n' + swmmRpt)
      console.log(e)
    }
  }

  // Whenever any of the data is refreshed, reload the wasm file and run swmm on the .inp.
  useEffect(() => {
    createModule().then((Module) => {
      wrapSwmmRun(Module)
    })
  },[])

  // If there isn't any reported output, display a loading message.
  if (!swmmRpt) {
    return "Loading webassembly..."
  } else {
    // If there is reported output, display the contents of the rpt file.
    return (
      <>
        <pre>{swmmRpt}</pre>
      </>
    )
  }
}

export default App;
