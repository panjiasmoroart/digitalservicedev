import React from 'react';
import { useForm } from 'react-hook-form';
import { rules } from "./validation";

export default function FormRegister() {

  const [gender, setGender] = React.useState(1)

  // pertama kita keluarkan register, handleSubmit dan setError dari useForm
  let { register, handleSubmit, errors } = useForm();

  const onSubmitRegister = async (formRegister) => {

    // alert(JSON.stringify(formRegister))
    let { file_ktp, file_kk } = (formRegister)

    let foto_ktp = file_ktp[0].name
    let foto_kartu_keluarga = file_kk[0].name
    let jenis_kelamin = (gender === 1) ? "Laki Laki" : "Perempuan"

    console.log({ ...formRegister, foto_ktp, foto_kartu_keluarga, jenis_kelamin })
    alert("Register Successs " + Math.random())
  }

  return <div className="container mt-2 mb-4">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="row mt-3">
          <div className="col-md-12">
            <div className="card" style={{
              boxShadow: '#287e3470 1px 0px 10px',
              borderRadius: '0.50rem',
              border: 'none',
            }}>

              <div className="card-header" style={{ backgroundColor: '#03a9f4' }}>
                <strong className="text-white">Form Registrasi</strong>
              </div>

              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmitRegister)} encType="multipart/form-data">
                  <div className="form-group">
                    <label className="font-weight-bold">Nama</label>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Nama"
                      ref={register(rules.name)}
                    />
                    <span className="badge badge-danger">{errors.name?.message}</span>
                  </div>
                  <div className="form-group">
                    <label className="font-weight-bold">NIK</label>
                    <input
                      name="nik"
                      type="number"
                      className="form-control"
                      placeholder="NIK"
                      ref={register(rules.nik)}
                    />
                    <span className="badge badge-danger">{errors.nik?.message}</span>
                  </div>
                  <div className="form-group">
                    <label className="font-weight-bold">Nomor Kartu Keluarga</label>
                    <input
                      name="nomor_kartu_keluarga"
                      type="number"
                      className="form-control"
                      placeholder="Nomor Kartu Keluarga"
                      ref={register(rules.nomor_kartu_keluarga)}
                    />
                    <span className="badge badge-danger">{errors.nomor_kartu_keluarga?.message}</span>
                  </div>
                  <div className="form-group">
                    <label className="font-weight-bold">Foto KTP</label>
                    <input
                      name="file_ktp"
                      type="file"
                      className="form-control-file"
                      ref={register(rules.file_ktp)}
                    />
                    <span className="badge badge-danger">{errors.file_ktp?.message}</span>
                  </div>
                  <div className="form-group">
                    <label className="font-weight-bold">Foto Kartu Keluarga</label>
                    <input
                      name="file_kk"
                      type="file"
                      className="form-control-file"
                      ref={register(rules.file_kk)}
                    />
                    <span className="badge badge-danger">{errors.file_kk?.message}</span>
                  </div>
                  <div className="form-group">
                    <label className="font-weight-bold">Umur</label>
                    <input
                      name="umur"
                      type="number"
                      className="form-control"
                      placeholder="Umur"
                      ref={register(rules.umur)}
                    />
                    <span className="badge badge-danger">{errors.umur?.message}</span>
                  </div>
                  <div className="form-group">
                    <label className="font-weight-bold mr-3">Jenis Kelamin</label>
                    <input type='radio' name='gender' checked={gender === 1} onChange={(e) => setGender(1)} />
                    <label className="ml-2 mr-4">Laki Laki</label>

                    <input type='radio' name='gender' checked={gender === 0} onChange={(e) => setGender(0)} />
                    <label className="ml-2">Perempuan</label>
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold"> Alamat</label>
                    <textarea
                      name="alamat"
                      className="form-control"
                      id="alamat"
                      rows="3"
                      ref={register(rules.alamat)}
                    ></textarea>
                    <span className="badge badge-danger">{errors.alamat?.message}</span>
                  </div>
                  <div className="form-group">
                    <label className="font-weight-bold">RT</label>
                    <input
                      name="rt"
                      type="text"
                      className="form-control"
                      placeholder="RT"
                      ref={register(rules.rt)}
                    />
                    <span className="badge badge-danger">{errors.rt?.message}</span>
                  </div>
                  <div className="form-group">
                    <label className="font-weight-bold">RW</label>
                    <input
                      name="rw"
                      type="text"
                      className="form-control"
                      placeholder="RW"
                      ref={register(rules.rw)}
                    />
                    <span className="badge badge-danger">{errors.rw?.message}</span>
                  </div>
                  <div className="form-group">
                    <label className="font-weight-bold">Penghasilan Sebelum Pandemi</label>
                    <input
                      name="before_pandemi"
                      type="number"
                      className="form-control"
                      placeholder="Penghasilan Sebelum Pandemi"
                      ref={register(rules.before_pandemi)}
                    />
                    <span className="badge badge-danger">{errors.before_pandemi?.message}</span>
                  </div>
                  <div className="form-group">
                    <label className="font-weight-bold">Penghasilan Setelah Pandemi</label>
                    <input
                      name="after_pandemi"
                      type="number"
                      className="form-control"
                      placeholder="Penghasilan Setelah Pandemi"
                      ref={register(rules.after_pandemi)}
                    />
                    <span className="badge badge-danger">{errors.after_pandemi?.message}</span>
                  </div>
                  <div className="form-group form-check">
                    <input
                      name=""
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label className="form-check-label" style={{ fontSize: "14px" }}>
                      Saya menyatakan bahwa data yang diisikan adalah benar
                    </label>
                  </div>
                  <button className="btn btn-block btn-secondary" type="submit">Daftar</button>
                </form>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
