export class ApiError extends Error
{
  constructor(message, data) {
    super(message)
    this.name = 'ApiError'
    Object.assign(this, data)
  }
}
