import React, { useContext, useState, useEffect } from 'react';
import { TeamGlobalContext } from '../../../../contexts/teamContext/TeamGlobalState';
import TeamTable from './TeamTable';

const EditTeam = () => {
  const context = useContext(TeamGlobalContext);
  const { error, UpdateTeamById, GetTeams, current, ClearError } = context;
  const [team, setTeam] = useState({
    id: '',
    name: '',
    city: '',
    country: '',
    image: '',
  });
  useEffect(() => {
    ClearError();
    if (current !== null) {
      setTeam(current);
    } else {
      setTeam({ id: '', name: '', city: '', country: '', image: '' });
    }
  }, [current]);

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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (/^[a-zA-Z]+$/.test(team.name)) {
      UpdateTeamById(team);
      setTeam({ id: '', name: '', city: '', country: '', image: '' });
      document.getElementById('imgg').value = '';
      document.getElementById('img').setAttribute('src', '');
      GetTeams();
    } else {
      alert('Please input alphabet characters only in name!!!');
    }
  };

  const onChangeHandler = (e) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  return (
    <div className='container'>
      <form onSubmit={onSubmitHandler}>
        <h1>Edit Team</h1>
        <div role='alert' style={{ width: '50%' }}>
          <strong style={{ color: 'red' }}> {error.message}</strong>
        </div>
        <div className='form-group'>
          <label>Team ID</label>
          <input
            type='number'
            className='form-control'
            required
            name='id'
            placeholder='Team ID'
            value={team.id}
            onChange={onChangeHandler}
            disabled
          />
          <div role='alert' style={{ width: '50%' }}>
            <strong style={{ color: 'red' }}> {error.id}</strong>
          </div>
        </div>
        <div className='form-group'>
          <label>Team Name</label>
          <input
            type='text'
            pattern='^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,30}$'
            className='form-control'
            required
            name='name'
            onChange={onChangeHandler}
            value={team.name}
            placeholder='Team Name'
          />
          <div role='alert' style={{ width: '50%' }}>
            <strong style={{ color: 'red' }}> {error.name}</strong>
          </div>
        </div>
        <div className='form-group'>
          <label>Team Country</label>
          <select
            className='form-control'
            onChange={onChangeHandler}
            value={team.country}
            name='country'
            required
          >
            <option value='' hidden>
              Select Country
            </option>
            <option value='Syria'>Syria</option>
          </select>
          <div role='alert' style={{ width: '50%' }}>
            <strong style={{ color: 'red' }}> {error.country}</strong>
          </div>
        </div>
        <div className='form-group'>
          <label>Team City</label>
          <select
            className='form-control'
            onChange={onChangeHandler}
            value={team.city}
            name='city'
            required
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
            <strong style={{ color: 'red' }}> {error.city}</strong>
          </div>
        </div>
        <div className='form-group'>
          <label>Team Logo file</label>
          <br />
          <img id='img' src={team.image} alt='' width='250px' height='250px' />
          <br />
          <input
            type='file'
            accept='.png, .jpg, .jpeg, .gif'
            onChange={fileSelectedHandler}
            className='form-control-file'
            id='imgg'
          />
          <div role='alert' style={{ width: '50%' }}>
            <strong style={{ color: 'red' }}> {error.image}</strong>
          </div>
        </div>

        <button
          type='submit'
          className='btn btn-primary'
          style={{ float: 'right' }}
        >
          Update Team
        </button>
        <br />
      </form>

      <br />
      <TeamTable />
    </div>
  );
};

export default EditTeam;
