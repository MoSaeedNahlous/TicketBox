import React from 'react';
import { TeamGlobalContext } from '../../../../contexts/teamContext/TeamGlobalState';
import { useContext, useState } from 'react';
import { useEffect } from 'react';

const AddTeam = () => {
  useEffect(() => {
    context.ClearError();
  }, []);

  const context = useContext(TeamGlobalContext);
  const [team, setTeam] = useState({
    name: '',
    country: '',
    city: '',
    image: '',
  });

  const addTeam = (e) => {
    e.preventDefault();
    if (/^[a-zA-Z]+$/.test(team.name)) {
      console.log(team);
      context.AddTeam(team);
      setTeam({ name: '', country: '', city: '', image: '' });
      document.getElementById('imgg').value = '';
      document.getElementById('img').setAttribute('src', '');
    } else {
      alert('Please input alphabet characters only in name!!!');
    }
  };
  const onChangeHandler = (e) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const fileSelectedHandler = (e) => {
    var fileName = document.getElementById('imgg').value;
    var idxDot = fileName.lastIndexOf('.') + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (
      extFile == 'jpg' ||
      extFile == 'jpeg' ||
      extFile == 'png' ||
      extFile == 'gif'
    ) {
      var url = e.target.value;
      var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
      if (
        e.target.files &&
        e.target.files[0] &&
        (ext == 'gif' || ext == 'png' || ext == 'jpeg' || ext == 'jpg')
      ) {
        var reader = new FileReader();

        reader.onload = function (e) {
          document.getElementById('img').setAttribute('src', e.target.result);
        };

        reader.readAsDataURL(e.target.files[0]);
      } else {
        document.getElementById('img').setAttribute('src', '');
      }

      var img = document.getElementById('img');
      img.crossOrigin = 'Anonymous';
      img.onload = function () {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.height = this.naturalHeight;
        canvas.width = this.naturalWidth;
        ctx.drawImage(this, 0, 0);
        var data = canvas.toDataURL('image/jpeg');
        console.log(data);
        setTeam({ ...team, image: data });
      };
    } else {
      alert('Only jpg/jpeg , png and gif files are allowed!');
      document.getElementById('imgg').value = null;
      document.getElementById('img').setAttribute('src', '');
    }
  };

  return (
    <div className='container'>
      <form onSubmit={addTeam}>
        <h1>Add Team</h1>
        <div className='form-group'>
          <label>Team Name</label>
          <input
            type='text'
            pattern='^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,30}$'
            className='form-control'
            name='name'
            placeholder='Team Name'
            value={team.name}
            onChange={onChangeHandler}
            required
          />
          <div role='alert' style={{ width: '50%' }}>
            <strong style={{ color: 'red' }}> {context.error.name}</strong>
          </div>
        </div>
        <div className='form-group'>
          <label>Country</label>
          <select
            required
            className='form-control'
            value={team.country}
            name='country'
            onChange={onChangeHandler}
          >
            <option value='' hidden>
              Select Country
            </option>
            <option value='Syria'>Syria</option>
          </select>
          <div role='alert' style={{ width: '50%' }}>
            <strong style={{ color: 'red' }}> {context.error.country}</strong>
          </div>
        </div>
        <div className='form-group'>
          <label>City</label>
          <select
            required
            className='form-control'
            value={team.city}
            name='city'
            onChange={onChangeHandler}
          >
            <option value='' hidden>
              Select City
            </option>
            <option value='Damascus'>Damascus</option>
            <option value='Aleppo'>Aleppo</option>
            <option value='Lattakia'>Lattakia</option>
            <option value='Homs'>Homs</option>
            <option value='Tartous'>Tartous</option>
            <option value='Daraa'>Daraa</option>
            <option value='Der-El-Zour'>Der El-Zour</option>
            <option value='Al-Rakka'>Al-Rakka</option>
            <option value='Al-Hasakeh'>Al-Hasakeh</option>
            <option value='Al-Swedaa'>Al-Swedaa</option>
            <option value='Idlib'>Idlib</option>
            <option value='Al-Kuneterah'>Al-Kuneterah</option>
          </select>
          <div role='alert' style={{ width: '50%' }}>
            <strong style={{ color: 'red' }}> {context.error.city}</strong>
          </div>
        </div>
        <div className='form-group'>
          <label>Team Logo file</label>
          <br />
          <img id='img' src='' alt='' width='250px' height='250px' />
          <br />
          <input
            type='file'
            accept='.png, .jpg, .jpeg, .gif'
            className='form-control-file'
            id='imgg'
            onChange={fileSelectedHandler}
          />
          <div role='alert' style={{ width: '50%' }}>
            <strong style={{ color: 'red' }}> {context.error.image}</strong>
          </div>
        </div>

        <div role='alert' style={{ width: '50%' }}>
          <strong style={{ color: 'red' }}> {context.error.message}</strong>
        </div>

        <button
          type='submit'
          className='btn btn-primary'
          style={{ float: 'right' }}
        >
          Add Team
        </button>
      </form>
    </div>
  );
};
export default AddTeam;
