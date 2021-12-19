# React Custom Button Component

A simple zero dependency react-button component for React 16+.

## Installation

```bash
npm install react-custom-button-component --save
```

Alternatively you can also use

```bash
yarn add react-custom-button-component --dev
```

### Basic Usage

```js
import { Button } from 'react-custom-button-component';

const buttonStyles = {
  color: 'white',
  backgroundColor: 'blue',
  padding: '4px',
  borderRadius: '4px',
};

function demo() {
  return (
    <Button
      onClick={() => console.log('I am clicked!')}
      buttonText="Hello World"
      className={buttonStyles}
    />
  );
}
```

### Props

react-custom-button-component accepts the following props. Instructions on how to use them are below.

| name       | types         | default      | Detail                                        |
| ---------- | ------------- | ------------ | --------------------------------------------- |
| buttonText | String        | value varies | Enter the text to display on button.          |
| className  | String        | value varies | Enter the css class name for applying styles. |
| onClick    | event handler | void         | Event handler for button.                     |
| style      | css styles    | value varies | Default style prop of button element.         |
| key        | String        | Number       | Key Prop for button if needed.                |
| disabled   | Boolean       | false        | To disable a button element.                  |
| type       | String        | button       | Default type prop of button element.          |

### License

Licensed under the MIT License.
