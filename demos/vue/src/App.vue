<script lang="ts" setup></script>

<template>
  <f-button type="default">Default</f-button>
  <f-button type="primary">Primary</f-button>
  <f-button type="success">Success</f-button>
  <f-button type="info">Info</f-button>
  <f-button type="warning">Warning</f-button>
  <f-button type="danger">Danger</f-button>

  <f-card shadow="always">
    <div slot="header">
      <span>这是页头</span>
    </div>

    <f-button type="primary" disabled>主要按钮</f-button>
    <p>1212121</p>
  </f-card>
</template>
