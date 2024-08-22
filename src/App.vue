<script setup lang="ts">
import { useTheme } from "./composables/useTheme";
const theme = useTheme();
</script>
<template>
  <div class="page">
    <div class="container">
      <h1>Hello useTheme Composable</h1>
      <p>
        Current Theme: <strong>{{ theme }}</strong>
      </p>
      <div class="btn-container">
        <button class="btn btn-primary shrink">Primary Button</button>
        <button class="btn btn-secondary shrink">Secondary Button</button>
      </div>
      <p class="btn-msg">
        (Buttons are for theme demo only, they should not do anything on click)
      </p>

      <label class="form-control">
        <select v-model="theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="coffee">Coffee</option>
          <option value="cupcake">Cupcake</option>
        </select>
      </label>
    </div>
  </div>
</template>
