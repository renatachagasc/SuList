
<template>
  <div id="app">
     <section class="hero is-primary is-bold is-fullheight">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item logo">
                SuList
              </a>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="row">
              <div class="columns">
              <div class="column is-half is-offset-one-quarter">
                
                <a class="compartilhar_email" href="">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M15.4553 12.0757C14.3553 12.0757 13.385 12.5998 12.7511 13.4023L6.8715 10.3955C6.94847 10.1084 7.0038 9.81174 7.0038 9.49956C7.0038 9.15972 6.93809 8.83976 6.8464 8.52842L12.7001 5.53545C13.3305 6.37429 14.3259 6.92257 15.4561 6.92257C17.3707 6.92257 18.9195 5.37376 18.9195 3.46086C18.9196 1.54968 17.3707 0 15.4562 0C13.5459 0 11.9953 1.54968 11.9953 3.46082C11.9953 3.77389 12.0507 4.07135 12.1285 4.35932L6.24974 7.36616C5.61499 6.5628 4.64297 6.03701 3.54125 6.03701C1.62835 6.03701 0.0804291 7.58754 0.0804291 9.49956C0.0804291 11.4116 1.62839 12.9613 3.54125 12.9613C4.67324 12.9613 5.66775 12.4113 6.30074 11.5716L12.1518 14.5645C12.0601 14.875 11.9936 15.1976 11.9936 15.5383C11.9936 17.4503 13.5441 19 15.4544 19C17.369 19 18.9178 17.4503 18.9178 15.5383C18.9187 13.6246 17.3699 12.0757 15.4553 12.0757Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="19" height="19" fill="white"/>
</clipPath>
</defs>
                  </svg>


                  Compartilhar tarefas por email</a>
               
              </div>
            </div>
            <div class="columns">
              <div class="column is-half is-offset-one-quarter">
                <todo-card></todo-card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <strong>© SuList | Todos os Direitos Reservados</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TodoCard from './components/TodoCard'
export default {
  name: 'app',
  components: {
    TodoCard
  },
  data () {
    return {
      msg: 'Hello, World!'
    }
  }
}
</script>

<style>
.selector-for-some-widget {
  box-sizing: content-box;
}
.logo{
  font-weight: bold;
    text-decoration-line: line-through;

    font-size: 29px;
}
.compartilhar_email{
  background: #23D160;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
border-radius: 10px;
padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
}
.compartilhar_email svg{
margin-right: 10px;
}
</style>
