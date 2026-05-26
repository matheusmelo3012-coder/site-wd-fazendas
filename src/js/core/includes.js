import $ from 'jquery'

const loadHtmlSuccssCallbacks = []

export function onLoadHtmlSuccess(callback){
    if(!loadHtmlSuccssCallbacks.includes(callback)){
        loadHtmlSuccssCallbacks.push(callback)
    }
}

function loadIncludes(parent){
    if(!parent) parent = 'body'

    $(parent).find('[wm-include]').each(function(i, e){

        const url = $(e).attr('wm-include')

        $.ajax({
            url,
            success(data){

                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadHtmlSuccssCallbacks.forEach(callback => callback(data))

                loadIncludes(e)
            }
        })
    })
}

loadIncludes()