<template>
  <div :class="{ 'dark': isDarkMode }" class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
    <!-- Dark Mode Toggle -->
    <div class="fixed top-4 right-4 z-10">
      <button @click="toggleTheme"
              class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
        <span v-if="isDarkMode" class="h-6 w-6">
          ☀️
        </span>
        <span v-if="!isDarkMode" class="h-6 w-6">
          🌑
        </span>
        <!--        <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
        <!--          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />-->
        <!--        </svg>-->
        <!--        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
        <!--          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />-->
        <!--        </svg>-->
      </button>
    </div>

    <!-- Hero Section -->
    <section class="bg-primary dark:bg-accent-dark text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Descomplique o Web Design e Transforme Ideias em Projetos Lucrativos!
        </h1>
        <p class="text-xl md:text-2xl mb-8">
          O guia definitivo para criar sites incríveis e fechar contratos de sucesso!
        </p>
        <button
            class="bg-accent dark:bg-primary-dark hover:bg-accent-light dark:hover:bg-accent-light text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Baixe Agora Mesmo!
        </button>
      </div>
    </section>

    <!-- Why this e-book is a game-changer -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center text-secondary dark:text-primary-dark">
          Por que esse e-book é um divisor de águas?
        </h2>
        <p class="text-lg mb-6 text-center dark:text-gray-300 font-bold">
          Se você quer criar sites incríveis e fechar contratos sem complicação, este e-book é para você!
        </p>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(advantage, index) in advantages" :key="index" class="flex items-start">
            <svg class="w-6 h-6 text-accent dark:text-accent-light mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p class="text-gray-800 dark:text-gray-300">{{ advantage }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What you'll learn -->
    <section class="py-16 bg-gray-100 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center text-secondary dark:text-secondary-dark">
          O que você vai aprender?
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(topic, index) in learningTopics" :key="index"
               class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div class="text-2xl mb-4">{{ topic.icon }}</div>
            <h3 class="font-bold mb-2 text-gray-800 dark:text-white">{{ topic.title }}</h3>
            <p class="text-gray-800 dark:text-gray-300">{{ topic.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Who is this e-book for -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center text-secondary dark:text-secondary-dark">
          Para quem este e-book foi feito?
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(audience, index) in targetAudience" :key="index" class="flex items-center">
            <svg class="w-6 h-6 text-accent dark:text-accent-light mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p class="text-lg text-gray-800 dark:text-gray-300">{{ audience }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Exclusive Bonuses -->
    <section class="py-16 bg-secondary dark:bg-accent-dark text-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">
          Bônus Exclusivos!
        </h2>
        <div class="grid md:grid-cols-4 gap-8">
          <div v-for="(bonus, index) in bonuses" :key="index" class="text-center">
            <div class="text-4xl mb-4">{{ bonus.icon }}</div>
            <p class="text-lg">{{ bonus.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7-day Guarantee Section -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <img src="/assets/img/selo7dias.png" width="250" alt="Selo de Garantia de 7 Dias"
               class="mb-8 md:mb-0 md:mr-8"/>
        </div>
        <div class="md:w-1/2 md:pl-8">
          <h2 class="text-3xl font-bold mb-4 text-secondary dark:text-primary-dark">Garantia de 7 Dias</h2>
          <p class="text-lg mb-4 text-gray-800 dark:text-gray-300">
            Estamos tão confiantes na qualidade do nosso e-book que oferecemos uma garantia de satisfação de 7 dias.
            Se você não ficar completamente satisfeito com o conteúdo, devolveremos 100% do seu investimento, sem
            perguntas.
          </p>
          <p class="text-lg font-bold text-accent dark:text-primary-dark">
            Sua satisfação é nossa prioridade!
          </p>
        </div>
      </div>
    </section>

<!--     Testimonials Section -->
<!--        <section class="py-16 bg-gray-100 dark:bg-gray-900">-->
<!--          <div class="container mx-auto px-4">-->
<!--            <h2 class="text-3xl font-bold mb-8 text-center text-secondary dark:text-secondary-dark">-->
<!--              O que nossos leitores dizem-->
<!--            </h2>-->
<!--            <div class="relative">-->
<!--              <div class="overflow-hidden">-->
<!--                <transition-group name="testimonial" tag="div" class="flex">-->
<!--                  <div v-for="testimonial in visibleTestimonials" :key="testimonial.id" class="w-1/2 px-4">-->
<!--                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">-->
<!--                      <p class="mb-4 dark:text-gray-300">{{ testimonial.content }}</p>-->
<!--                      <p class="font-bold dark:text-white">{{ testimonial.author }}</p>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </transition-group>-->
<!--              </div>-->
<!--              <button @click="prevTestimonial" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-accent dark:bg-accent-dark text-white rounded-full p-2">-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />-->
<!--                </svg>-->
<!--              </button>-->
<!--              <button @click="nextTestimonial" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-accent dark:bg-accent-dark text-white rounded-full p-2">-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />-->
<!--                </svg>-->
<!--              </button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </section>-->

    <!-- CTA -->
    <section class="py-16 bg-primary dark:bg-primary-dark text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8">Baixe seu e-book Agora!</h2>
        <a class="w-full bg-accent dark:bg-accent-dark hover:bg-accent-light dark:hover:bg-accent-light text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Receba seu e-book Agora
        </a>
      </div>
    </section>

    <!-- FAQ Section (Accordion Style) -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center text-secondary dark:text-secondary-dark">
          Perguntas Frequentes
        </h2>
        <div class="max-w-3xl mx-auto">
          <div v-for="(item, index) in faq" :key="index"
               class="mb-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <button
                @click="toggleFaq(index)"
                class="flex justify-between items-center w-full p-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 rounded-lg"
            >
              <span class="font-bold text-gray-800 dark:text-white ">{{ item.question }}</span>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6 transition-transform duration-300 text-gray-500"
                  :class="{ 'transform rotate-180': item.isOpen }"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <transition name="fade">
              <p v-if="item.isOpen" class="p-4 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-300" v-html="item.answer">

              </p>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-secondary dark:bg-secondary-dark text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Melli Criações. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue';

const email = ref('');
let isDarkMode = ref(false);
const isDarkModeLocalStorageItem = ref('color-theme');
const darkModeOption = ref('dark');
const lightModeOption = ref('light');

const getTheme = () => {
  if (localStorage.getItem(isDarkModeLocalStorageItem.value) === darkModeOption.value || (!(isDarkModeLocalStorageItem.value in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add(darkModeOption.value);
    isDarkMode.value = true;
  } else {
    document.documentElement.classList.remove(darkModeOption.value)
    isDarkMode.value = false;
  }
}
getTheme();

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  setTheme(isDarkMode.value)
}

const setTheme = (value) => {
  (value) ? document.documentElement.classList.add(darkModeOption.value) : document.documentElement.classList.remove(darkModeOption.value);
  window.localStorage.setItem(isDarkModeLocalStorageItem.value, value ? darkModeOption.value : lightModeOption.value);
}

const faq = ref([
  {
    question: 'O material é para iniciantes?',
    answer: 'Sim, o conteúdo é explicado de forma clara e didática, ideal para iniciantes e profissionais que buscam se aprimorar!',
    isOpen: false
  },
  {
    question: 'Eu preciso saber programar?',
    answer: 'Não! O foco do e-book é em web design estratégico, não em programação. Porém temos um capítulo dedicado a tecnologias para desenvolvimento de site.',
    isOpen: false
  },
  {
    question: 'Quanto tempo leva para receber o e-book?',
    answer: 'Você receberá o link para download imediatamente após inserir seu e-mail.',
    isOpen: false
  },
  {
    question: 'Posso compartilhar o e-book com outras pessoas?',
    answer: 'O e-book é para uso pessoal. Por favor, incentive seus amigos a comprarem sua própria cópia.',
    isOpen: false
  },
  {
    question: 'Recebo somente um e-book?',
    answer: "Você terá acesso ao e-book <strong>Web Design Descomplicado</strong> e seus adicionais:<br> " +
        "- <b>Modelos de mensagens para clientes</b> - modelos de mensagens de comunicação; <br>" +
        "- <b>Recursos para sites</b> - ferramentas e sites com recurusos para criação de sites; <br>" +
        "- <b>Modelos de documentos</b> - proposta comercial, contratos, planilha de precificação, planejamento, briefing e modelos de técnicas de criavitivade; <br>" +
        "- <b>Checklist para criação de sites profissionais</b>; <br>",
    isOpen: false
  },
  {
    question: 'Haverá atualizações?',
    answer: "Tecnologia é inovação, nesta área estamos sempre buscando melhorar, assim este e-book terá atualizações e você que adquirir terá acesso a todas. Esta é primeira versão a um valor acessível, após, este e-book será atualizado e consequentemente aumentará seu valor.<br>",
    isOpen: false
  },
]);

const toggleFaq = (index) => {
  faq.value[index].isOpen = !faq.value[index].isOpen;
};

const testimonials = ref([
  {id: 1, content: "Este e-book transformou minha abordagem ao web design. Altamente recomendado!", author: "Maria S."},
  {id: 2, content: "Finalmente entendi como precificar meus serviços. Obrigado!", author: "João P."},
  {
    id: 3,
    content: "O capítulo sobre portfólio é ouro puro. Consegui mais clientes desde que o implementei.",
    author: "Ana R."
  },
  {
    id: 4,
    content: "As dicas de criatividade me ajudaram a superar o bloqueio criativo. Incrível!",
    author: "Carlos M."
  },
  {id: 5, content: "Os modelos de contrato salvaram minha vida. Muito obrigado!", author: "Fernanda L."},
  {id: 6, content: "Aprendi mais com este e-book do que em meses de pesquisa na internet.", author: "Ricardo G."},
  {
    id: 7,
    content: "As técnicas de briefing melhoraram muito minha comunicação com os clientes.",
    author: "Patrícia K."
  },
  {id: 8, content: "Excelente recurso para quem quer se destacar no mercado de web design.", author: "Marcelo T."},
]);

const currentTestimonialIndex = ref(0);

const visibleTestimonials = computed(() => {
  const startIndex = currentTestimonialIndex.value;
  return [
    testimonials.value[startIndex],
    testimonials.value[(startIndex + 1) % testimonials.value.length]
  ];
});

const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const advantages = ref([
  'Aprenda a criar sites incríveis que convertem visitantes em clientes.',
  'Descubra como precificar seus serviços de web design de forma estratégica.',
  'Domine as técnicas de briefing para entender perfeitamente as necessidades dos seus clientes.',
  'Construa um portfólio profissional que atrai clientes e demonstra seu talento.',
  'Receba modelos de contratos prontos para usar, garantindo a segurança dos seus negócios.',
  'Aprenda dicas de criatividade para superar o bloqueio criativo e gerar ideias inovadoras.',
  'Descubra como se destacar no mercado de web design e conquistar mais clientes.',
  'Entenda sobre tipos de hospedagens de site para revender e recomendar ao seu cliente. Registre você mesmo um domínio!',
  'Conheça as principais tecnologias para desenvolvimento web.'
]);

const learningTopics = ref([
  {icon: '🖥️', title: 'Portfólio', description: 'Como montar um portfólio para área de design e programação.'},
  {icon: '📑', title: 'Briefing', description: 'Perguntas certas para alinhar expectativas com clientes.'},
  {icon: '💡', title: 'Criatividade', description: 'Técnicas para desbloquear ideias geniais.'},
  {icon: '📊', title: 'Precificação', description: 'Defina seus preços de forma justa e lucrativa.'},
  {icon: '📄', title: 'Contratos', description: 'Evite problemas legais com um contrato bem estruturado.'},
  {icon: '🚀', title: 'Tecnologias Web', description: 'Ferramentas que vão facilitar sua vida.'},
]);

const targetAudience = ref([
  'Freelancers de web design.',
  'Agências de marketing digital.',
  'Empreendedores que desejam criar seu próprio site.',
  'Profissionais que querem se especializar em web design.',
  'Estudantes de design que buscam conhecimento prático.',
  'EUgência, quer começar seu próprio negócio? A internet é um ótimo negócio.',
]);

const bonuses = ref([
  {icon: '📂', description: 'Modelos de mensagens para comunicação com seus clientes'},
  {icon: '🔗', description: 'Recursos para sites, crie sites com diferenciais'},
  {icon: '🎁', description: 'Acesso a modelos de propostas, contratos, precificação e muito mais, prontos para uso!'},
  {icon: '✅', description: 'Checklist para criação de sites profissionais'},
]);
</script>
