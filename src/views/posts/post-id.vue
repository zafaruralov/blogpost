<template>
  <div class="post container">
    <article class="proxy">
      <div class="proxy-life__first">
        <h1 class="titles proxy-life__first-title">Introduction - PROXY</h1>
        <p class="titles proxy-life__first-example">
          Imagine you're at a Chinese restaurant. You don't know Chinese, so you rely on a translator to communicate
          with the waiter. The translator listens to what you say and tells the waiter what you want. In this situation,
          the translator acts as your <mark>"Proxy"</mark>.
        </p>
        <p class="titles proxy-life__first-js">
          In JavaScript, proxies serve a similar purpose. They act as an intermediary between you and an object,
          allowing you to manage or monitor the interactions with that object.
        </p>
        <div class="titles proxy-life__first-when">
          <p>
            With proxies, you can <mark>track</mark> and <mark>control</mark> what happens to an object when you
            interact with it. For example:
          </p>
          <ul>
            <li>
              Validate input values before assigning them to the object's properties (e.g., ensuring age is a positive
              number).
            </li>
            <li>
              Restrict access to sensitive or private data (e.g., preventing access to properties starting with an
              underscore `_`).
            </li>
            <li>Add custom behaviors when reading, writing, or deleting object properties.</li>
          </ul>
          <p>
            Proxies are an excellent way to <mark>listen to</mark> and <mark>control objects dynamically</mark>,
            especially in complex projects.
          </p>
        </div>
      </div>

      <div class="proxy-life__second">
        <h1 class="titles proxy-life__second-title">Using - Proxy</h1>
        <p class="titles proxy-life__second-example">
          Now that we understand what a proxy is and when it can be used, let's explore some coding examples.
        </p>
        <div class="titles proxy-life__second-coding code">
          <img src="../../assets/images/Screenshot-proxy.png" alt="proxy code example" />
          <!-- 
    const user = {};
    const proxy = new Proxy(user, {
      set(target, property, value) {
        if (property === "age" && (typeof value !== "number" || value <= 0)) {
          throw new Error("Age must be a positive number.");
        }
        target[property] = value;
        return true;
      }
    });
    -->
        </div>
        <p class="titles proxy-life__second-what">
          In this example, we use a proxy to <mark>prevent negative numbers</mark> from being assigned to the `age`
          property of an object. When you assign a value to `proxy.age`, the proxy intercepts this action. For example:
        </p>
        <ul>
          <li>
            <strong>Target:</strong> This refers to the original object being proxied (in this case, the `user` object).
          </li>
          <li><strong>Property:</strong> The property being accessed or modified (e.g., `age`).</li>
          <li><strong>Value:</strong> The value being assigned to the property (e.g., `25` for `proxy.age = 25`).</li>
        </ul>
        <p>
          If an invalid value is provided (e.g., a negative number), the proxy will throw an error, ensuring the data
          remains valid.
        </p>

        <div class="titles proxy-life__second-coding code">
          <img src="../../assets/images/proxy-get.png" alt="proxy code example" />
          <!-- 
    const user = { name: "Alice", _password: "secret" };
    const proxy = new Proxy(user, {
      get(target, property) {
        if (property.startsWith("_")) {
          throw new Error("Access to private properties is not allowed.");
        }
        return target[property];
      }
    });
    -->
        </div>
        <p class="titles proxy-life__second-what">
          In this example, we use a proxy to <mark>restrict access to private data</mark>. If a user tries to access a
          property starting with `_` (e.g., `_password`), the proxy throws an error:
          <mark>"Access to private properties is not allowed."</mark>
          This approach is useful for <mark>enforcing encapsulation</mark>, especially in large projects.
        </p>
      </div>
      <div class="proxy-life__second">
        <h1 class="titles proxy-life__second-title">Reflect API - The Perfect Companion to Proxy</h1>
        <p class="titles proxy-life__third-when">
          Now we understand how Proxy works and when it is needed.
          <mark>If your code grows in complexity, managing Proxy logic becomes harder to maintain.</mark>
          This is where the Reflect API shines) .
        </p>
        <p class="titles proxy-life__second-about">
          The Reflect API is a built-in JavaScript object that provides methods to perform default operations on
          objects, such as property access, assignment, and deletion.
          <mark
            >Think of Reflect as a helper that makes writing Proxy logic feel like working with ordinary objects.</mark
          >
          Let’s revisit the previous example, this time using Reflect for a cleaner approach.
        </p>
        <div class="titles proxy-life__second-coding code">
          <img src="../../assets/images/reflect.png" alt="proxy code example" />
          <p class="proxy-life__second-coding-sorry">Sorry for the different image style :)</p>
          <!-- 
      const user = {
        age: 25,
      };

      const handler = {
        set(target, property, value) {
          if (property === 'age' && value < 0) {
            throw new Error("Age cannot be negative");
          }
          return Reflect.set(target, property, value);
        },
        get(target, property) {
          return Reflect.get(target, property);
        }
      };

      const proxy = new Proxy(user, handler);

      try {
        proxy.age = -5;
      } catch (error) {
        console.error(error.message);
      }

      proxy.age = 30;
      console.log(proxy.age);
    -->
        </div>
      </div>
      <div class="proxy-life__second">
        <h1 class="titles proxy-life__second-title">Proxy Limitations</h1>

        <p class="titles proxy-life__second-warning">
          <mark>Warning: To continue, you need a basic understanding of Map objects.</mark>
        </p>

        <p class="titles proxy-life__second-desc">
          <mark>Note:</mark> In JavaScript, Proxies allow us to intercept fundamental operations like <code>get</code>,
          <code>set</code>, and <code>delete</code>. However, with <code>Map</code> objects, these operations typically
          call methods like <code>map.get(key)</code> instead of directly accessing properties.
        </p>

        <p class="titles proxy-life__second-desc">
          <code>Map</code> does not rely on JavaScript's native internal methods <code>[[Get]]</code> or
          <code>[[Set]]</code>. Instead, it uses internal slots like <code>[[MapData]]</code> to store key-value pairs.
          These slots are <strong>not accessible</strong> from JavaScript code but are crucial to how
          <code>Map</code> works behind the scenes.
        </p>

        <div class="titles proxy-life__second-desc">
          <mark>Note:</mark> For example:
          <ul>
            <li>
              When we call <code>obj.age</code>, the object triggers <code>[[Get]]</code>, which Proxies can intercept
              using <code>get(target, property)</code>.
            </li>
            <li>
              However, <code>map.get(key)</code> operates directly on the <code>[[MapData]]</code> slot, bypassing the
              Proxy entirely.
            </li>
          </ul>
          <mark>Warning:</mark> This is why Proxies cannot observe or control operations like <code>map.get()</code> or
          <code>map.set()</code>.
        </div>

        <p class="titles proxy-life__second-who">
          <strong>Vue 3 and Map Reactivity:</strong>
          <mark>Note:</mark> Vue 3 uses Proxies to create reactive data. When we access or modify an object property,
          Vue detects it through the Proxy handler.
        </p>

        <div class="titles proxy-life__second-who">
          Vue addresses the limitations of <code>Map</code> by wrapping its methods (<code>get</code>, <code>set</code>,
          <code>delete</code>) within the reactive system. This allows Vue to detect changes to a <code>Map</code> and
          trigger reactivity. However:
          <ul>
            <li><mark>Warning:</mark> Accessing the <code>size</code> of a Map does not trigger reactivity.</li>
            <li>
              <mark>Warning:</mark> Iterating over <code>entries</code> or <code>keys</code> of a Map does not trigger
              reactivity by default.
            </li>
          </ul>
          These limitations exist because Vue cannot observe operations on internal slots like <code>[[MapData]]</code>.
        </div>
      </div>
    </article>
  </div>
</template>
<script setup lang="ts"></script>
