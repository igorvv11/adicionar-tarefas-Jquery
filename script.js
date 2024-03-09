$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault(); // Evita o comportamento padrão de atualização da página

        let taskName = $('#task-input').val(); // Obtém o valor do input

        if (taskName.trim() !== '') { // Verifica se o campo não está vazio
            var listItem = $('<li>').text(taskName); // Cria um novo item de lista
            $('#task-list').append(listItem); // Adiciona o item à lista

            $('#task-input').val(''); // Limpa o input após adicionar a tarefa

            // Adiciona o efeito de linha no texto ao clicar no item da lista
            listItem.click(function() {
                $(this).toggleClass('completed');
            });
        }
    });
});
