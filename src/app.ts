import 'dotenv/config'
import './config/module-alias'
import { a } from '@/core/use-cases/a'

console.log('ts!', a, process.env.CUSTOM_ENV)
