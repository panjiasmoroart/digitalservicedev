const rules = {
  name: {
    required: { value: true, message: 'Nama wajib diisi' },
    maxLength: { value: 100, message: 'Panjang nama maksimal 100 karakter.' }
  },
  nik: {
    required: { value: true, message: 'NIK wajib diisi' },
    maxLength: { value: 16, message: 'Panjang NIK maksimal 16 karakter.' }
  },
  nomor_kartu_keluarga: {
    required: { value: true, message: 'Nomor Kartu Keluarga wajib diisi' },
    maxLength: { value: 16, message: 'Panjang Nomor Kartu Keluarga maksimal 16 karakter.' }
  },
  file_ktp: {
    required: { value: true, message: 'Foto KTP wajib diupload' }
  },
  file_kk: {
    required: { value: true, message: 'Foto Kartu Keluarga wajib diupload' }
  },
  umur: {
    required: { value: true, message: 'Umur wajib diisi' }
  },
  alamat: {
    required: { value: true, message: 'Alamat wajib diisi' },
    maxLength: { value: 250, message: 'Panjang Alamat maksimal 250 karakter.' }
  },
  rt: {
    required: { value: true, message: 'RT wajib diisi' },
    maxLength: { value: 10, message: 'Panjang maksimal 10 karakter.' }
  },
  rw: {
    required: { value: true, message: 'RW wajib diisi' },
    maxLength: { value: 10, message: 'Panjang maksimal 10 karakter.' }
  },
  before_pandemi: {
    required: { value: true, message: 'Penghasilan Sebelum Pandemi wajib diisi' }
  },
  after_pandemi: {
    required: { value: true, message: 'Penghasilan Setelah Pandemi wajib diisi' }
  },
  // email: {
  //   required: { value: true, message: 'Email harus diisi.' },
  //   maxLength: { value: 255, message: 'Panjang email maksimal 255 karakter.' },
  //   pattern: { value: /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/, message: 'Email tidak valid' },
  // },
}

export { rules }