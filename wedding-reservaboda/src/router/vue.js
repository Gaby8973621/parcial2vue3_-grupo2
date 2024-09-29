methods: {
    sendWhatsApp() {
      const phoneNumber = '50378092729'; // Número de WhatsApp de destino
      const message = encodeURIComponent(this.message); // Codificar el mensaje para que sea URL-safe
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`; 
      window.location.href = whatsappUrl; // Redirigir al enlace de WhatsApp
      this.message = ''; // Limpiar el campo de mensaje después de enviarlo
    },
    sendEmail() {
      const email = 'ellie.morales.9.12@gmail.com'; // Correo de destino
      const subject = 'Nuevo Mensaje desde el Formulario'; // Asunto del correo
      const body = encodeURIComponent(this.message); // Codificar el cuerpo del mensaje para que sea URL-safe
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`; 
      window.open(gmailUrl, '_blank'); // Abrir Gmail en una nueva pestaña para enviar el correo
      this.message = ''; // Limpiar el campo de mensaje después de enviarlo
    }
  }
  