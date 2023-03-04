import { supabaseAdmin } from './client'

supabaseAdmin.from('images').insert([{
    name: 'Pedro Duarte',
    href: 'https://twitter.com/peduarte/status/1463897468383412231',
    username: '@peduarte',
    imageSrc: 'https://pbs.twimg.com/media/FFDOtLkWYAsWjTM?format=jpg',
}]);