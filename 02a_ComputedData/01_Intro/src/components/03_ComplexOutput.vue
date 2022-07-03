<!--
  Outputting complex information into the Vue template
-->
<template>
  <div class="container">
    <p>{{ fullName }}</p>
    <p>{{ totalPosts }}</p>
    <p>{{ featuredPosts }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      post: {
        fields: {
          author: {
            firstName: 'John',
            lastName: 'Doe'
          },
          entries: [{
            title: "Post title 1",
            content: "Entry 1's content",
            featured: true
          }, {
              title: "Post title 2",
              content: "Entry 2's content",
              featured: true
            }
          ]
        }
      }
    }
  },
  computed: {
    fullName() {
      // Return string
      return this.post.fields.author.firstName + ' '
          + this.post.fields.author.lastName;
    },
    totalPosts() {
      // Return number
      return this.post.fields.entries.length
    },
    featuredPosts() {
      // Return string
      return this.post.fields.entries.filter(entry => {
        // If featured is true, return the entry title
        if (entry.featured) {
          return entry
        }
      })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
}

input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}

.output {
  font-size: 16px;
  color: red;
}
</style>
