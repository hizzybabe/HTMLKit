---
title: Styling & Animations
---

## Chapter 4: Styling & Animations

In this chapter, you’ll explore styling and animations in Svelte. Svelte makes it easy to apply scoped styles, add smooth transitions, and create custom animations. By the end of the chapter, you’ll build an Animated UI that combines these techniques to create an engaging, interactive experience.

### **Chapter 4 Overview:**
- Duration: Approximately 3 hours
- Goal: Learn how to style Svelte components with scoped CSS, apply transitions, use built-in motion effects, and create custom animations.

---

### **Theory**

#### **4.1 Scoped Styles**

Svelte’s CSS is scoped to the component by default, meaning that styles you apply in a component only affect elements within that component. This prevents styles from unintentionally affecting other parts of the app, making it easier to maintain and structure CSS.

**Example of Scoped Styles**:
```svelte
<script>
    let isActive = false;
</script>

<style>
    .button {
        padding: 10px 20px;
        background-color: teal;
        color: white;
        border: none;
        cursor: pointer;
    }

    .button.active {
        background-color: darkorange;
    }
</style>

<button class="button {isActive ? 'active' : ''}" on:click={() => isActive = !isActive}>
    Toggle
</button>
```

In this example, the styles are applied to the button within the component only, even if another component has a `.button` class.

---

#### **4.2 CSS Transitions**

CSS transitions in Svelte are straightforward, allowing elements to animate between styles. You can define transitions directly in CSS, such as for color, position, and opacity.

**Example**:
```svelte
<style>
    .box {
        width: 100px;
        height: 100px;
        background-color: coral;
        transition: transform 0.3s ease, background-color 0.3s ease;
    }

    .box:hover {
        transform: scale(1.1);
        background-color: darksalmon;
    }
</style>

<div class="box"></div>
```

Here, the `box` element scales and changes color smoothly when hovered over.

---

#### **4.3 Motion (Built-in Transitions)**

Svelte offers built-in motion functions, such as `fade`, `slide`, `fly`, and `scale`, for easily adding animations to components. You can import these from `svelte/transition` and use them with directives like `in:` and `out:` to define how elements enter and exit the DOM.

**Example of `fade`**:
```svelte
<script>
    import { fade } from 'svelte/transition';
    let isVisible = true;
</script>

<button on:click={() => isVisible = !isVisible}>Toggle Box</button>

{#if isVisible}
    <div in:fade={{ duration: 500 }} class="box"></div>
{/if}
```

**Explanation**:
- **`in:fade`**: Adds a fade-in effect with a specified duration when the element enters the DOM.

---

#### **4.4 Custom Animations**

Custom animations in Svelte allow you to control the movement of elements with keyframes or JavaScript. Use CSS `@keyframes` or Svelte’s `animate` functions to create tailored animations.

**Example with `@keyframes`**:
```svelte
<style>
    @keyframes bounce {
        0% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0); }
    }

    .bouncing-box {
        animation: bounce 1s infinite;
        width: 100px;
        height: 100px;
        background-color: deepskyblue;
    }
</style>

<div class="bouncing-box"></div>
```

In this example, `@keyframes` is used to make the box bounce up and down.

---

### **Practice Workshop: Animated UI**

In this workshop, you’ll create an Animated UI that combines scoped styles, transitions, and custom animations. This will include buttons with hover effects, animated cards, and a slide-in panel.

#### **Workshop Tasks**

1. **Set Up Your Project**
   - If you’re continuing from a previous project, you can use the same setup. Otherwise, set up a new Svelte project.
   - Create a new file named `AnimatedUI.svelte` in the `src` folder.

2. **Creating the Animated UI Component**

   **AnimatedUI.svelte**:
   ```svelte
   <script>
       import { fade, fly } from 'svelte/transition';

       let showPanel = false;
       let cards = ["Card 1", "Card 2", "Card 3"];
   </script>

   <style>
       .container {
           display: flex;
           flex-direction: column;
           align-items: center;
           padding: 20px;
       }

       .toggle-button {
           margin: 10px;
           padding: 10px 20px;
           font-size: 16px;
           cursor: pointer;
           background-color: teal;
           color: white;
           border: none;
           transition: background-color 0.3s ease;
       }

       .toggle-button:hover {
           background-color: darkorange;
       }

       .panel {
           width: 300px;
           height: 200px;
           background-color: lightgray;
           display: flex;
           justify-content: center;
           align-items: center;
           font-size: 20px;
           margin-top: 20px;
           border-radius: 8px;
           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
       }

       .card {
           margin: 10px;
           padding: 20px;
           width: 150px;
           height: 100px;
           background-color: cornflowerblue;
           color: white;
           font-size: 18px;
           display: flex;
           align-items: center;
           justify-content: center;
           border-radius: 5px;
           transition: transform 0.3s ease;
       }

       .card:hover {
           transform: translateY(-10px);
       }
   </style>

   <div class="container">
       <button class="toggle-button" on:click={() => showPanel = !showPanel}>
           Toggle Panel
       </button>

       {#if showPanel}
           <div in:fly={{ y: 200, duration: 600 }} out:fade class="panel">
               Slide-In Panel
           </div>
       {/if}

       <div>
           {#each cards as card (card)}
               <div class="card" in:fade={{ duration: 300 }}>{card}</div>
           {/each}
       </div>
   </div>
   ```

   **Explanation**:
   - **Toggle Button**: The button toggles the visibility of the slide-in panel using `showPanel`.
   - **Slide-In Panel**: This panel uses the `fly` transition to slide in from the bottom and a `fade` transition to fade out.
   - **Animated Cards**: The cards are displayed in a grid with a `fade` transition on load. Hovering over each card applies a CSS `transform` effect to lift the card.

3. **Testing the Animated UI**

   - Start the development server (`npm run dev`) and open `http://localhost:5000` in your browser.
   - Test each animation by interacting with the toggle button and hovering over the cards.
   - Confirm that the panel slides in and out and that the cards fade in on load and animate on hover.

---

### **Deliverables**

1. **Svelte Project Folder**:
   - Submit a zipped version of your Svelte project, including `AnimatedUI.svelte`.

2. **Screenshot or GIF**:
   - Capture a screenshot or GIF showing the Animated UI in action, including the panel sliding in and the cards animating.

---

### **Summary and Key Takeaways**

- **Scoped Styles**: Svelte components have scoped styles by default, keeping CSS local to each component.
- **CSS Transitions**: Use CSS transitions for smooth animations on hover or between states.
- **Motion**: Svelte’s built-in motion functions like `fade`, `fly`, `slide`, and `scale` make it easy to add entry and exit animations.
- **Custom Animations**: Use `@keyframes` or JavaScript for custom, complex animations.

This chapter covered styling and animations in Svelte, giving you the tools to create polished and interactive interfaces. These animation techniques can enhance user experience by making your app feel more responsive and engaging.

<script>
  import ChapterNavigation from '$lib/components/ChapterNavigation.svelte';
</script>

<ChapterNavigation 
    prevHref="/learn/svelte/ch3" 
    nextHref="/learn/svelte/ch5"
  />