## Project Overview 🎉

This is a Toolbar widget, thanks to which we can dynamically change the position of our navigation and the text that is in it.

## Tech/framework used 🔧

- HTML
- CSS
- JavaScript
- BEM

## Screenshots 📺

### Initial

<p align="center">
	<img src="https://i.ibb.co/rt86tmw/initial.png" />
</p>

### Position: top

<p align="center">
	<img src="https://i.ibb.co/vzSwMhX/position-top.png" />
</p>

### Position: bottom

<p align="center">
	<img src="https://i.ibb.co/267c0hZ/position-bottom.png" />
</p>

## Installation 💿

```bash
git clone https://github.com/Gasparuss/toolbar.git

OR

Click the Code button and then Download ZIP

```

## How to use ⚙️

1. Paste the code below into the body tag.

```bash

<nav class="nav">
    <div class="nav__container">
      <div class="nav__content">
        <p class="nav__text">Add beautiful widgets to your website</p>
        <button class="nav__button" type="button">Get widgets</button>
      </div>
      <div class="nav__close">
        <span>X</span>
      </div>
    </div>
  </nav>

  <main class="showbar">
    <button type="button" class="showbar__button">
      Show Bar
    </button>
  </main>

```

2. Paste the code below into the head tag

```bash

 <link rel="stylesheet" href="toolbar-widget/style.css" />
 <link rel="preconnect" href="https://fonts.googleapis.com" />
 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
 <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />

```

3. The last task is to paste the code right before the closed body tag.

```bash

  <script src="toolbar-widget/widget.js"></script>
  <script type="text/javascript">

    let myBar = new Bar({
      message: "Add beautiful widgets to your website",
      position: "top",
    });

  </script>

```

4. Once we have completed the above steps, we can dynamically change the text in our navigation by entering any phrase in the message property and change the position of our navigation where we can choose the "top" or "bottom" position.

Example:

```bash



 let myBar = new Bar({
      message: "Hello, world!",
      position: "bottom",
    });

```

</br>
</br>

<p align="center">
	<img src="https://i.ibb.co/WWJ9bzd/EX.png" />
</p>
