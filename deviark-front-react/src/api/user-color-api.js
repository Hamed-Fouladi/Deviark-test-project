export default class UserColorApi {

  _apiBase = 'http://localhost:4000/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);//

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getUsers() {
    const users = await this.getResource('/user');
    return users;
  }

  async getColors(goodsGroup) {
    const colors = await this.getResource('/colors');
    return colors;
  }

  async addUser(data) {
    const res = await fetch(`${this._apiBase}/user`,  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`Could not fetch POST user, received ${res.status}`);
    }
    return await res.json();
  }

}
