
import React, {useState} from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
    const [figmaValue, setFigmaValue] = useState('')
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "assets/brotlicompressed/Build/testBuildw.loader.js",
        dataUrl: "assets/brotlicompressed/Build/testBuildw.data.unityweb",
        frameworkUrl: "assets/brotlicompressed/Build/testBuildw.framework.js.unityweb",
        codeUrl: "assets/brotlicompressed/Build/testBuildw.wasm.unityweb",
    });
    const handledSync = async (event: any) => {
        event.preventDefault();
        console.log('sync to figma function')
        console.log(figmaValue)
    }
    function handleClickSpawnEnemies() {
        sendMessage("Viewer", "SpawnEnemies", 1000);
    }
    return (
        <div>
        <Unity
            style={{
                width: "80%",

                justifySelf: "center",
                alignSelf: "center",
            }}
            unityProvider={unityProvider}
        />
            <input type={'text'}/>
            <button onClick={handleClickSpawnEnemies}>Spawn Enemies</button>
            <form onSubmit={handledSync}>
                <label>link figma object</label>
                <input
                    type={'text'}
                    readOnly={false}
                    name={'figmaValue'}
                    value={figmaValue}
                    onChange={(e)=>{setFigmaValue(e.target.value)}}
                />
                <button type={"submit"} >Sync figma</button>
            </form>

        </div>
    );
}

export default App
