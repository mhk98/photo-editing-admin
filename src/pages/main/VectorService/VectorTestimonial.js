import React from "react";
import { useContext, useEffect, useState } from "react";
import { Row, Col, Dropdown, Button } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import PageLayout from "../../../layouts/PageLayout";
import { ButtonComponent } from "../../../components/elements";
import { TranslatorContext } from "../../../context/Translator";
import { PaginationComponent } from "../../../components";
import { useCreatevectorTestimonialMutation, useDeletevectorTestimonialMutation, useGetAllvectorTestimonialQuery, useUpdatevectorTestimonialMutation } from "../../../features/VectorService/vectorTestimonial/vectorTestimonial";


const VectorTestimonial = () => {
  const thead = ["Image", "Title","Name", "Country", "Description", "action"];

  const { t } = useContext(TranslatorContext);

  const [editModal, setEditModal] = React.useState(false);
  const [blockModal, setBlockModal] = React.useState(false);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [image1, setImage1] = useState("");

  const [file1, setFile1] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("")
  const [country, setCountry] = useState("")
  const [description, setDescription] =  useState("")

  console.log("title", title);
  const [aboutUs, setAboutUs] = useState([]);
  const [updateId, setUpdateId] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  function handleChange1(e) {
    setFile1(URL.createObjectURL(e.target.files[0]));
    if (e.target.files && e.target.files.length > 0) {
      setImage1(e.target.files[0]);
    }
  }

  const [createvectorTestimonial] = useCreatevectorTestimonialMutation();

  const onFormSubmit = async () => {
    const formData = new FormData();

    formData.append("image", image1);
    formData.append("title", title);
    formData.append("name", name);
    formData.append("country", country);
    formData.append("description", description);
 

    console.log("aboutUs", formData);
    try {
      const res = await createvectorTestimonial(formData);
      if (res) {
        toast.success(res.info.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [updatevectorTestimonial] = useUpdatevectorTestimonialMutation();

  const onFormEdit = async () => {
    const formData = new FormData();

    formData.append("image", image1);
    formData.append("title", title);
    formData.append("name", name);
    formData.append("country", country);
    formData.append("description", description);
 

    try {
      const res = await updatevectorTestimonial({ id: updateId, data: formData });
      if (res) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [homeBannerData, setHomeBannerData] = useState([]);

  const { data, isLoading, isError, error } = useGetAllvectorTestimonialQuery();

  useEffect(() => {
    if (isError) {
      console.error("Error fetching health data", error);
    } else if (!isLoading) {
      if (data) {
        setAboutUs(data.data);
      }
    }
  }, [data, isLoading, isError, error]);

  const [deletevectorTestimonial] = useDeletevectorTestimonialMutation();

  const handleDeleteHomeBanner = async (id) => {
    const res = await deletevectorTestimonial(id);
    if (res.data.status === "Success") {
      alert("Do you want to delete");
    }
    console.log(res);
  };

  return (
    <PageLayout>
      <Row>
        <Col xl={12}>
          <div className="mc-card">
            <div className="mc-card-header">
              <Button variant="primary" onClick={handleShow}>
                ADD +
              </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton className="text-center p-3">
                <Modal.Title className="w-100">Home Banner</Modal.Title>
              </Modal.Header>
              <Modal.Body className="p-2 text-center">
                <form onSubmit={onFormSubmit}>
                  <div className="mb-3">
                    <label htmlFor="image1" className="form-label">
                      Upload Image 1
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image1"
                      name="image"
                      accept="image/*"
                      onChange={handleChange1}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="title"
                      name="title"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                    <div className="mb-3">
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="country"
                        name="country"
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="description"
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>

                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </form>
              </Modal.Body>
            </Modal>

            {/* <UsersTableComponent thead={users.thead} tbody={users.tbody} /> */}

            <div className="mc-table-responsive">
              <table className="mc-table">
                <thead className="mc-table-head primary">
                  <tr>
                    {thead.map((item, index) => (
                      <th key={index}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="mc-table-body even">
                  {aboutUs?.map((item, index) => (
                    <tr key={index}>
                      {/* <td title="id">
                        <div className="mc-table-check">
                          <input
                            type="checkbox"
                            name={item.name}
                            checked={item?.isChecked || false}
                            onChange={handleCheckbox}
                          />
                          <p>#{index + 1}</p>
                        </div>
                      </td> */}

                      <td>
                        <div className="mc-table-icon role">
                          <img
                            src={`http://localhost:5000/${item.image}`}
                            alt=""
                            width={80}
                            height={60}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="mc-table-icon role">{item.title}</div>
                      </td>
                      <td>
                        <div className="mc-table-icon role">{item.name}</div>
                      </td>
                      <td>
                        <div className="mc-table-icon role">{item.country}</div>
                      </td>
                      <td>
                        <div className="mc-table-icon role">{item.description}</div>
                      </td>                   

                      <td>
                        <div className="mc-table-action">
                          <ButtonComponent
                            title="Edit"
                            className="material-icons edit"
                            onClick={() => {
                              handleShow1(); // Open the edit modal
                              setUpdateId(item.Id);
                            }}
                          >
                            <FiEdit />
                          </ButtonComponent>

                          <ButtonComponent
                            title="Block"
                            onClick={() => handleDeleteHomeBanner(item.Id)}
                          >
                            <MdDelete color="red" />
                          </ButtonComponent>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton className="text-center p-3">
                  <Modal.Title className="w-100">Home Banner</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-2 text-center">
                  <form onSubmit={onFormEdit}>
                    <div className="mb-3">
                      <label htmlFor="image1" className="form-label">
                        Upload Image 1
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="image1"
                        name="image"
                        accept="image/*"
                        onChange={handleChange1}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Title
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="title"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                    <div className="mb-3">
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="country"
                        name="country"
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="description"
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                   

                    <Button type="submit" variant="primary">
                      update
                    </Button>
                  </form>
                </Modal.Body>
              </Modal>

              <Modal show={blockModal} onHide={() => setBlockModal(false)}>
                <div className="mc-alert-modal">
                  <i className="material-icons">new_releases</i>
                  <h3>are your sure!</h3>
                  <p>Want to block this user's account?</p>
                  <Modal.Footer>
                    <ButtonComponent
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setBlockModal(false)}
                    >
                      {t("close")}
                    </ButtonComponent>
                    <ButtonComponent
                      type="button"
                      className="btn btn-danger"
                      onClick={() => setBlockModal(false)}
                    >
                      {t("block")}
                    </ButtonComponent>
                  </Modal.Footer>
                </div>
              </Modal>
            </div>
            <PaginationComponent />
          </div>
        </Col>
      </Row>
    </PageLayout>
  );
};

export default VectorTestimonial;
