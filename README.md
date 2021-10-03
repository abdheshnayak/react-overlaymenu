# Overlay Menu

### Example

```js
import OverlayMenu from "overlaymenu";
import { useRef, useState } from "react";
function App() {
  const [visible, setvisible] = useState(false);
  const container_ref = useRef();

  return (
    <div>
      <div ref={container_ref}>
        <h1 onClick={() => setvisible(!visible)}>Menu</h1>
        <OverlayMenu
          container_ref={container_ref}
          visible={visible}
          setVisible={setvisible}
        >
          <div>
            <div>item</div>
            <div>item2</div>
            <div>item3</div>
          </div>
        </OverlayMenu>
      </div>
    </div>
  );
}

export default App;
```
