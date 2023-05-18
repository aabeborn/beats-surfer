import NextAuth, {AuthOptions} from 'next-auth'

import {config} from '@/lib/auth'

export default NextAuth(config)
