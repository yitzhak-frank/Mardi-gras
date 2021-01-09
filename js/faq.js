$(() => init());

const init = () => faqViewEvents();

const faqViewEvents = () => {
    $('.question').on('click' ,function () {
        if($(this).next().is(':visible')) $(':nth-child(1)', this).css('transform', '');
        else {
            $('.answer').hide(700);
            $('.fa-chevron-down').css('transform', '');
            $(':nth-child(1)', this).css('transform', 'rotate(-180deg)');
        }
        $(this).next('.answer').toggle(700);
    });
}